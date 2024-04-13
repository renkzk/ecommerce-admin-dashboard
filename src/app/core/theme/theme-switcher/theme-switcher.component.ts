import { Component, OnInit, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ThemeService } from "../theme.service";

@Component({
  selector: "app-theme-switcher",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./theme-switcher.component.html",
})
export class ThemeSwitcherComponent implements OnInit {
  // Dependencies
  private themeService = inject(ThemeService);

  // Set on init
  currentTheme!: "light" | "dark";

  ngOnInit() {
    this.currentTheme = this.themeService.getCurrentTheme();
  }

  toggleTheme() {
    console.log(this.currentTheme);
    const newTheme = this.themeService.getCurrentTheme() === "light" ? "dark" : "light";
    this.themeService.setTheme(newTheme);
  }
}
