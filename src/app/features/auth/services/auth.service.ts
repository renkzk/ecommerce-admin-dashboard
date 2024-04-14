import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { environment } from "@environments/environment";
import { LoginCredentials, LoginResponse } from "../models/interfaces/auth.interface";
import { LocalStorageKey } from "@app/shared/models/enums/local-storage.enum";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  // Dependencies
  private http = inject(HttpClient);
  private router = inject(Router);

  // Methods
  public isAuthenticated(): boolean {
    const jwt = localStorage.getItem(LocalStorageKey.JWT);
    return !!jwt;
  }

  public logIn(loginCredentials: LoginCredentials): Observable<LoginResponse> {
    // uses "identifier"
    // because both user's "email" or "username" can be used to authenticate a user
    return this.http.post<LoginResponse>(
      `${environment.apiUrl}/auth/login/admin`,
      loginCredentials,
    );
  }

  public logOut(): void {
    localStorage.removeItem(LocalStorageKey.JWT);
    this.router.navigate(["/login"]);
  }
}
