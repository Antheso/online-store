import { Component } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroupDirective,
  NgForm
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';

import { User } from '../../model/user';
import { UsersService } from '../../services/user.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public matcher = new MyErrorStateMatcher();
  public loginFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(4)
  ]);
  public passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(4)
  ]);

  public user = new User();

  get isValid(): boolean {
    return this.loginFormControl.valid && this.passwordFormControl.valid;
  }

  constructor(
    private usersSrv: UsersService,
    private router: Router
  ) { }

  public singIn(): void {
    this.usersSrv.singIn(this.user).subscribe(() => {
      this.router.navigate(['/catalog']);
    });
  }

}
