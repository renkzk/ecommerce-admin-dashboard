import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class CustomErrorHandler implements ErrorHandler {
  handleError(error: unknown) {
    console.warn(`Caught by CustomErrorHandler: ${error}`);
  }
}
