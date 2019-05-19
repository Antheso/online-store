import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { User } from '../../../model/user';
import { ManageUsersService } from './manage-users.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManageUsersResolver implements Resolve<User[]> {

  constructor(
    private manageSrv: ManageUsersService
  ) { }

  public resolve(): Observable<User[]> {
    return this.manageSrv.getUsers();
  }

}
