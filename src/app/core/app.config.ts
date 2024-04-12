import { ApplicationConfig, ErrorHandler } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { CustomErrorHandler } from '../shared/services/custom-error-handler.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    // Use custom error handler
    { provide: ErrorHandler, useClass: CustomErrorHandler }, provideAnimationsAsync(),
  ],
};
