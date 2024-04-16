import { UserRole } from "../enums/user.enum";

export interface User {
  id: string;
  username: string;
  email: string;
  role: UserRole;
}
