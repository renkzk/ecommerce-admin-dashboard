import { Component } from "@angular/core";
import { HeaderComponent } from "@app/shared/ui/header/header.component";
import { LoginFormComponent } from "../form/login-form.component";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [HeaderComponent, LoginFormComponent],
  template: `
    <div class="flex flex-col h-full">
      <app-header></app-header>
      <app-login-form class="h-full grid place-items-center"></app-login-form>
    </div>
  `,
})
export class LoginComponent {}
