import { Injectable } from '@angular/core';
import { auth } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs/index';
import { User } from './models/user';
import { User as fbUser } from 'firebase';
import { Role } from './models/role';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

export interface Credentials {
  email: string;
  password: string;
}

@Injectable({providedIn: 'root'})
export class AuthService {
  readonly authState$: Observable<fbUser | null> = this.fireAuth.authState;
  private usersRolesCollection: AngularFirestoreCollection<Role>;
  user: User;

  constructor(private fireAuth: AngularFireAuth, private db: AngularFirestore) {
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

  login({email, password}: Credentials) {
    const session = auth.Auth.Persistence.SESSION;
    return this.fireAuth.auth.setPersistence(session).then(() => {
      return this.fireAuth.auth.signInWithEmailAndPassword(email, password).then(res => this.setUser());
    });
  }


  register({email, password}: Credentials) {
    return this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  logout() {
    this.user = null;
    return this.fireAuth.auth.signOut();
  }
}
