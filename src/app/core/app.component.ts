import { Component, OnInit, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { LocalStorageKey } from "@app/shared/models/enums/local-storage.enum";
import { ThemeService } from "./theme/theme.service";
import { HeaderComponent } from "./header/header.component";
import { TranslateService } from "@ngx-translate/core";

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
})
export class AppComponent implements OnInit {
  // Dependencies
  private themeService = inject(ThemeService);
  private translate = inject(TranslateService);

  ngOnInit(): void {
    // set theme (light theme is default if not set in LocalStorage)
    this.themeService.setTheme(
      localStorage.getItem(LocalStorageKey.Theme) === "dark" ? "dark" : "light",
    );
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang("en");
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use(navigator.language.split("-")[0]);
  }
}
