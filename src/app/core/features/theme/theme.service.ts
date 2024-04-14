import { Injectable } from "@angular/core";
import { LocalStorageKey } from "@app/shared/models/enums/local-storage.enum";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  public setTheme(theme: "light" | "dark") {
    localStorage.setItem(LocalStorageKey.Theme, theme);
    document.documentElement.setAttribute("data-theme", theme);
  }

  public getCurrentTheme(): "light" | "dark" {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    return currentTheme as "light" | "dark";
  }
}
