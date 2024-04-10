import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(private fb: FormBuilder) {}

  loginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  isSubmitted = false;
  isLoading = false;

  isInvalid(field: 'username' | 'password'): boolean | undefined {
    return (
      this.loginForm.get(field)?.invalid &&
      (this.loginForm.get(field)?.touched ||
        this.loginForm.get(field)?.dirty ||
        this.isSubmitted)
    );
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.loginForm.valid) {
      this.isLoading = true;

      // TODO: implement login
      setTimeout(() => {
        this.isLoading = false;
        console.log(this.loginForm.value);
      }, 2000);
    }
  }
}
