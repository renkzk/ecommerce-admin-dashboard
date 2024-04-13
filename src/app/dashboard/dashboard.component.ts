import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { AuthService } from "@app/auth/services/auth.service";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: "app-dashboard",
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `<div class="flex flex-col justify-center items-center gap-5 h-full">
    <h1 class="text-3xl">Hello you are authenticated.</h1>
    <h1 class="text-3xl">{{ "hello-world" | translate }}</h1>
    <button (click)="logOut()" class="btn btn-error btn-outline">
      {{ "auth.logout" | translate }}
    </button>
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
