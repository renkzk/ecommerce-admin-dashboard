import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { AuthService } from "@app/auth/services/auth.service";

@Component({
  selector: "app-dashboard",
  standalone: true,
  imports: [CommonModule],
  template: `<div class="flex flex-col justify-center items-center gap-5 h-full">
    <h1 class="text-3xl">Hello you are authenticated.</h1>
    <button (click)="logOut()" class="btn btn-error btn-outline">Sign out</button>
  </div>`,
})
export class DashboardComponent {
  // Dependencies
  private authService = inject(AuthService);

  // Methods
  public logOut() {
    this.authService.logOut();
  }
}
