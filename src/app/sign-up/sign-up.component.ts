import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  registerCredentials = {
    email: '',
    firstname: '',
    surname: '',
    address: '',
    password: '',
    passwordConfirmation: ''
  };

  registerInfo = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  signUp() {
    if (this.registerCredentials.password !== this.registerCredentials.passwordConfirmation) {
      alert('Podane hasła różnią się od siebie.');
      return;
    }
    this.authService.register(this.registerCredentials)
      .then(() => this.registerInfo = 'Konto utworzone - można się zalogować.')
      .catch(err => alert(err.message));
  }
}
