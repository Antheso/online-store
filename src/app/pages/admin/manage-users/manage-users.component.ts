import { Component } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { User } from '../../../model/user';
import { ManageUsersService } from './manage-users.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent {

  get users(): User[] {
    return this.editSrv.users$.value;
  }

  get editedUser$(): BehaviorSubject<User> {
    return this.editSrv.editingUser$;
  }

  constructor(
    private editSrv: ManageUsersService
  ) { }

  public deleteUser(login: string): void {
    this.editSrv.deleteUser(login).subscribe(() => {
      this.editSrv.users$.next(this.users.filter(user => user.login !== login));
    });
  }

  public editUser(user: User): void {
    this.editedUser$.next(user);
  }

}
