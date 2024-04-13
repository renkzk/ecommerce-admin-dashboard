import { Component, OnInit, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { LocalStorageKey } from "@app/shared/models/enums/local-storage.enum";
import { ThemeService } from "./theme/theme.service";
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <div class="flex flex-col h-full">
      <app-header></app-header>
      <div class="flex-1">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        height: 100%;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  // Dependencies
  private themeService = inject(ThemeService);

  ngOnInit(): void {
    // set theme (light theme is default if not set in LocalStorage)
    this.themeService.setTheme(
      localStorage.getItem(LocalStorageKey.Theme) === "dark" ? "dark" : "light",
    );
  }
}
