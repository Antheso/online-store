import { Component } from '@angular/core';

import { User } from '../../model/user';
import { UsersService } from '../../services/user.service';

@Component({
    selector: 'top-bar',
    styleUrls: ['./top-bar.component.css'],
    templateUrl: './top-bar.component.html'
})
export class TopbarComponent {

    public collapse = false;
    public cart_num: number;

    get user(): User {
        return this.userSrv.user;
    }

    get userName(): string {
        return this.user.name && this.user.surname
            ? `${this.user.name} ${this.user.surname}`
            : this.user.login;
    }

    constructor(
        private userSrv: UsersService
    ) { }

    public logout(): void {
        this.userSrv.logout();
    }
}
