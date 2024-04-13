import { Component } from "@angular/core";
import { ThemeSwitcherComponent } from "../theme/theme-switcher/theme-switcher.component";
import { LanguageSwitcherComponent } from "../i18n/language-switcher/language-switcher.component";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [ThemeSwitcherComponent, LanguageSwitcherComponent],
  template: `
    <div class="flex justify-end items-center p-6 gap-5">
      <app-theme-switcher></app-theme-switcher>
      <app-language-switcher></app-language-switcher>
    </div>
  `,
})
export class HeaderComponent {}
