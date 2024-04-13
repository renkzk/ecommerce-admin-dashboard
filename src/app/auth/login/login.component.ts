import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { finalize } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
@Component({
  selector: "app-login",
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: "./login.component.html",
})
export class LoginComponent {
  // Injections
  fb = inject(FormBuilder);
  authService = inject(AuthService);

  // Properties
  loginForm = this.fb.nonNullable.group({
    identifier: ["", [Validators.required, Validators.minLength(4)]],
    password: ["", [Validators.required]],
  });

  get identifier() {
    return this.loginForm.get("identifier");
  }
  get password() {
    return this.loginForm.get("password");
  }

  isSubmitted = false;
  isLoading = false;
  error: Error | null = null;

  // Methods
  isInvalid(field: "identifier" | "password"): boolean | undefined {
    return (
      this.loginForm.get(field)?.invalid &&
      (this.loginForm.get(field)?.touched || this.loginForm.get(field)?.dirty || this.isSubmitted)
    );
  }

  onSubmit() {
    // Reset
    this.isSubmitted = true;
    this.error = null;

    // Return if invalid
    if (this.loginForm.invalid) return;

    // Else proceed
    this.isLoading = true;

    this.authService
      .login(this.loginForm.getRawValue())
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({
        next: (res) => {
          console.log("Login successful");
        },
        error: (err: HttpErrorResponse) => {
          this.error = err.error;
        },
      });
  }
}
