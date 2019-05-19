import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { CookieService } from 'ngx-cookie';

import { Observable, throwError, of, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { ApiService } from './api.service';
import { User } from '../model/user';

export const jwtCookieKey = 'jwtToken';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public user$: BehaviorSubject<User> = new BehaviorSubject(void 0);

  get user(): User {
    return this.user$.value;
  }

  constructor(
    private api: ApiService,
    private cookie: CookieService,
    private router: Router
  ) { }

  public singUp(body: User): Observable<any> {
    return this.api.post('/user', body).pipe(
      catchError((error: any) => throwError(error || 'Server error'))
    );
  }

  public singIn(body: User): Observable<any> {
    return this.api.post('/login', body).pipe(
      tap(token => this.cookie.put(jwtCookieKey, token)),
      catchError((error: any) => throwError(error || 'Server error'))
    );
  }

  public logout(): void {
    this.cookie.remove(jwtCookieKey);
    this.user$.next(void 0);
    this.router.navigate(['/login']);

  }

  public getUserData(): Observable<User> {
    if (this.user) {
      return this.user$;
    }

    const token = this.cookie.get(jwtCookieKey);

    if (!token) {
      return of(void 0);
    }

    return this.api.get('/user').pipe(
      tap(user => this.user$.next(user)),
      catchError(() => {
        return of(void 0);
      })
    );
  }

}
