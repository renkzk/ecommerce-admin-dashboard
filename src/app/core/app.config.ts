import { ApplicationConfig, ErrorHandler, importProvidersFrom } from "@angular/core";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import { HttpClient, provideHttpClient } from "@angular/common/http";
import { CustomErrorHandler } from "../shared/services/custom-error-handler.service";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { MatSnackBar } from "@angular/material/snack-bar";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    // Use custom error handler
    { provide: ErrorHandler, useClass: CustomErrorHandler },
    // Material Providers
    provideAnimationsAsync(),
    MatSnackBar,
    // i18n
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
      }),
    ),
  ],
};

// Factory for creating a TranslateHttpLoader instance.
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
