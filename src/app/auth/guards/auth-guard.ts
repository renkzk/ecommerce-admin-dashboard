import { Injectable, inject } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: "root",
})
class AuthGuardHandler {
  // Dependencies
  private authService = inject(AuthService);
  private router = inject(Router);

  // Methods
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log(this.authService.isAuthenticated());
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }
  }
}

export const AuthGuard: CanActivateFn = (route, state) => {
  return inject(AuthGuardHandler).canActivate(route, state);
};
