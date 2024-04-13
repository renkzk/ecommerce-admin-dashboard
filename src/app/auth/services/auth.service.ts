import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { environment } from "@environments/environment";
import { LoginCredentials, LoginResponse } from "../models/interfaces/auth.interface";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  // Dependencies
  private http = inject(HttpClient);

  // Methods
  login(loginCredentials: LoginCredentials) {
    // uses "identifier"
    // because both user's "email" or "username" can be used to authenticate a user
    return this.http.post<LoginResponse>(
      `${environment.apiUrl}/auth/login/admin`,
      loginCredentials,
    );
  }
}
