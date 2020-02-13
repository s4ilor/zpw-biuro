import { Injectable } from '@angular/core';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { User } from '../models/user';
import { User as firebaseUser } from 'firebase';
import { Observable } from 'rxjs/index';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Role} from '../models/role';
import { auth } from 'firebase';

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
  readonly authState$: Observable<firebaseUser | null> = this.fireAuth.authState;
  private usersRolesCollection: AngularFirestoreCollection<Role>;
  user: User;
  constructor(private fireAuth: AngularFireAuth,
              private db: AngularFirestore) {
    this.usersRolesCollection = this.db.collection<Role>('usersRoles');
    this.setUser();
  }
  setUser() {
    this.authState$.subscribe(u => {
      if (u) {
        this.db.doc<Role>(`/usersRoles/${u.uid}`).valueChanges()
          .subscribe((userRole: Role) => { this.user = {email: u.email, uid: u.uid, role: userRole} as User; });
      }
    });
  }
  getUser(): User | null {
    return this.user;
  }
  isAdmin(): boolean {
    return this.user && this.user.role && this.user.role.role === 'admin';
  }
  async login({email, password}: loginCredentials) {
    const session = auth.Auth.Persistence.SESSION;
    await this.fireAuth.auth.setPersistence(session);
    const res = await this.fireAuth.auth.signInWithEmailAndPassword(email, password);
    return this.setUser();
  }
  register({email, password}: registerCredentials) {
    return this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
  }
  logout() {
    this.user = null;
    return this.fireAuth.auth.signOut();
  }
}
