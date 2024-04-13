import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler, Injectable, NgZone, inject } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

// CustomErrorHandler for catching uncaught errors
@Injectable()
export class CustomErrorHandler implements ErrorHandler {
  snackbar = inject(MatSnackBar);
  zone = inject(NgZone);

  handleError(error: unknown | HttpErrorResponse) {
    // Asynchronous errors are handled in "ngZone" provided by Angular's "ErrorHandler".
    // The issue is that the "exceptionHandler" is wrapped in "ngZone.runOutsideAngular()" function,
    // so the error will be handled in a different Angular zone.

    // This can cause some issues,
    // for example: Material Snackbar will not be rendered inside "app-root"

    // That's why we need to wrap the error handling logic in "this.zone.run()" function.
    this.zone.run(() => {
      if (error instanceof HttpErrorResponse) {
        this.snackbar.open(`CustomErrorHandler: ${error.message}`, "Close", {
          duration: 4000,
        });
      }
    });

    console.group(
      "%cCaught by CustomErrorHandler",
      "color: #ffffff; background-color: #522e37; font-family:monospace; font-size: 20px",
    );
    console.warn(error);
    console.groupEnd();
  }
}
