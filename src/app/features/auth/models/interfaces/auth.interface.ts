import { User } from "@app/shared/models/interfaces/user.interface";

export interface LoginCredentials {
  identifier: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  jwt: string;
}
