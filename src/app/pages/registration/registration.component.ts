import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../../model/user';
import { MyErrorStateMatcher } from '../login/login.component';
import { UsersService } from '../../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  public matcher = new MyErrorStateMatcher();
  public loginFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(4)
  ]);
  public passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(4)
  ]);
  public passwordFormControlCopy = new FormControl('', [
    Validators.required,
    Validators.minLength(4)
  ]);

  get isValid(): boolean {
    return this.loginFormControl.valid && this.passwordFormControl.valid && this.passwordFormControlCopy.valid;
  }

  public user = new User();
  public repeatPass = '';

  constructor(
    private usersSrv: UsersService,
    private router: Router
  ) { }

  public signUp(): void {
    if (!this.isValid) {
      return;
    }

    this.usersSrv.singUp(this.user).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }

}
