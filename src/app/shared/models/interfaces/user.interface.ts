import { UserRole } from "../enums/user.enum";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}
