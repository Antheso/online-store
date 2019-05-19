import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, throwError } from 'rxjs';

import { User } from '../../../model/user';
import { ApiService } from '../../../services/api.service';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ManageUsersService {

  public users$: BehaviorSubject<User[]> = new BehaviorSubject([]);
  public editingUser$: BehaviorSubject<User> = new BehaviorSubject(void 0);

  constructor(
    private api: ApiService
  ) { }

  public getUsers(): Observable<User[]> {
    return this.api.get('/users').pipe(
      tap(users => this.users$.next(users)),
      catchError((error: any) => throwError(error || 'Server error'))
    );
  }

  public updateUser(user: User): Observable<any> {
    return this.api.patch(`/users/${user.login}`, user).pipe(
      catchError((error: any) => throwError(error || 'Server error'))
    );
  }

  public deleteUser(login: string): Observable<any> {
    return this.api.delete(`/users/${login}`).pipe(
      catchError((error: any) => throwError(error || 'Server error'))
    );
  }

}
