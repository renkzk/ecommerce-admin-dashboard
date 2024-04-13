import { ApplicationConfig, ErrorHandler, importProvidersFrom } from "@angular/core";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import { HttpClient, provideHttpClient } from "@angular/common/http";
import { CustomErrorHandler } from "../shared/services/custom-error-handler.service";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { MatSnackBar } from "@angular/material/snack-bar";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { createTranslateLoader } from "./i18n/translate-loader";

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
          useFactory: createTranslateLoader,
          deps: [HttpClient],
        },
      }),
    ),
  ],
};
