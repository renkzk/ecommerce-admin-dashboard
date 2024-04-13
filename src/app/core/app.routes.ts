import { Routes } from "@angular/router";
import { AuthGuard } from "@app/auth/guards/auth-guard";
import { LoginComponent } from "@app/auth/login/login.component";
import { DashboardComponent } from "@app/dashboard/dashboard.component";

export const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "login",
    component: LoginComponent,
  },
];
