import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

import { User } from '../../../../model/user';
import { ManageUsersService } from '../manage-users.service';

@Component({
  selector: 'app-manage-sidebar',
  templateUrl: './manage-sidebar.component.html',
  styleUrls: ['./manage-sidebar.component.css'],
  animations: [
    trigger('pageAnimations', [
      transition(':enter', [
        style({
          right: '-100%'
        }),
        animate('0.5s 0.1s ease', style({
          right: '0'
        }))
      ]),
      transition(':leave', [
        style({
          right: '0'
        }),
        animate('0.5s 0.1s ease', style({
          right: '-100%'
        }))
      ])
    ]),
  ]
})
export class ManageSidebarComponent {

  get user(): User {
    return this.editSrv.editingUser$.value;
  }

  constructor(
    private editSrv: ManageUsersService
  ) { }

  public updateUser(): void {
    this.editSrv.updateUser(this.user).subscribe(() => {
      this.close();
    });
  }

  public close(): void {
    this.editSrv.editingUser$.next(void 0);
  }

}
