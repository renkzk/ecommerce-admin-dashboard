import { Component } from "@angular/core";
import { ThemeSwitcherComponent } from "../theme/theme-switcher/theme-switcher.component";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [ThemeSwitcherComponent],
  template: `
    <div class="flex justify-end p-6">
      <app-theme-switcher></app-theme-switcher>
    </div>
  `,
})
export class HeaderComponent {}
