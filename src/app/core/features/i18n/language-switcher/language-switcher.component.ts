import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { LocalStorageKey } from "@app/shared/models/enums/local-storage.enum";
import { TranslateModule, TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-language-switcher",
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: "./language-switcher.component.html",
})
export class LanguageSwitcherComponent {
  // Dependencies
  public languages = ["en", "it"];
  private translate = inject(TranslateService);

  onLanguageSelect(language: string) {
    localStorage.setItem(LocalStorageKey.Language, language);
    this.translate.use(language);
  }
}
