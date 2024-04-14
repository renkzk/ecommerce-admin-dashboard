import { Component } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: "app-not-found",
  standalone: true,
  imports: [TranslateModule],
  template: `
    <div class="flex flex-col justify-center items-center h-full">
      <h1 class="absolute text-[15rem] opacity-10 pb-5">404</h1>
      <h3 class="text-xl">{{ "error.page-not-found" | translate }}</h3>
    </div>
  `,
})
export class PageNotFoundComponent {}
