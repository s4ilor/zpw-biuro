import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent {

  loginCredentials = {
    email: '',
    password: ''
  };

  registerInfo = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  signIn() {
    this.authService.login(this.loginCredentials)
      .then(() => this.router.navigate(['home']))
      .catch(err => alert(err.message) );
  }

}
