import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { UsersService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate, CanActivateChild {

  constructor(
    private userSrv: UsersService,
    private router: Router
  ) { }

  canActivate(): Observable<boolean> {
    return this.userSrv.getUserData().pipe(
      tap(user => {
        if (!user) {
          this.router.navigate(['/login']);
        }

        if (!user.isAdmin) {
          this.router.navigate(['/catalog']);
        }
      }),
      map(user => user && user.isAdmin)
    );
  }

  canActivateChild(): Observable<boolean> {
    return this.canActivate();
  }

}
