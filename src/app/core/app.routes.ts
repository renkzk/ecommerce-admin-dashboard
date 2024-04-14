import { Routes } from "@angular/router";
import { DashboardLayout } from "@app/features/(protected)/layout/dashboard-layout.component";
import { AuthGuard } from "@app/features/auth/guards/auth-guard";
import { PageNotFoundComponent } from "@app/core/features/page-not-found/page-not-found.component";
import { LoginComponent } from "@app/features/auth/login/layout/login.component";

export const routes: Routes = [
  {
    title: "Dashboard",
    path: "",
    component: DashboardLayout, // contains header and drawer components
    canActivate: [AuthGuard], // only accessible if authenticated
    loadChildren: () =>
      // lazy load dashboard routes from dashboard.routes.ts
      import("@app/features/(protected)/routes/dashboard.routes").then((c) => c.routes),
  },
  {
    title: "Login",
    path: "login",
    component: LoginComponent,
  },
  {
    title: "Page Not Found",
    path: "**",
    component: PageNotFoundComponent,
  },
];
