import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';

import { Observable } from 'rxjs';
import { mapTo } from 'rxjs/operators';

import { UsersService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(
    private userSrv: UsersService
  ) { }

  canActivate(): Observable<boolean> {
    return this.userSrv.getUserData().pipe(
      mapTo(true)
    );
  }

  canActivateChild(): Observable<boolean> {
    return this.canActivate();
  }

}
