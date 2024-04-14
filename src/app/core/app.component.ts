import { Component, OnInit, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { LocalStorageKey } from "@app/shared/models/enums/local-storage.enum";
import { HeaderComponent } from "../shared/ui/header/header.component";
import { TranslateService } from "@ngx-translate/core";
import { DrawerComponent } from "@app/features/(protected)/layout/drawer/drawer.component";
import { AuthService } from "@app/features/auth/services/auth.service";
import { ThemeService } from "./features/theme/theme.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, DrawerComponent],
  template: ` <router-outlet></router-outlet> `,
})
export class AppComponent implements OnInit {
  // Dependencies
  private themeService = inject(ThemeService);
  private translate = inject(TranslateService);
  public authService = inject(AuthService);

  ngOnInit(): void {
    // set theme (light theme is default if not set in LocalStorage)
    this.themeService.setTheme(
      localStorage.getItem(LocalStorageKey.Theme) === "dark" ? "dark" : "light",
    );
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang("en");
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use(
      localStorage.getItem(LocalStorageKey.Language) || navigator.language.split("-")[0],
    );
  }
}
