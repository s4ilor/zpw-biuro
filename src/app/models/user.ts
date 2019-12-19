import { Role } from './role';

export interface User {
  uid: string;
  email: string;
  firstname: string;
  surname: string;
  address: string;
  role: Role;
}
