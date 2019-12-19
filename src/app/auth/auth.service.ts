import { Injectable } from '@angular/core';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth'; import { User } from 'firebase';
import { Observable } from 'rxjs/index';
export interface registerCredentials {
  email: string;
  firstname: string;
  surname: string;
  address: string;
  password: string;
}
export interface loginCredentials {
  email: string;
  password: string;
}
@Injectable({providedIn: 'root'}) export class AuthService {
  readonly authState$: Observable<User | null> = this.fireAuth.authState;
  constructor(private fireAuth: AngularFireAuth) {}
  get user(): User | null {
    return this.fireAuth.auth.currentUser;
  }
  login({email, password}: loginCredentials) {
    return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
  }
  register({email, firstname, surname, address, password}: registerCredentials) {
    return this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
  }
  logout() {
    return this.fireAuth.auth.signOut();
  } }
