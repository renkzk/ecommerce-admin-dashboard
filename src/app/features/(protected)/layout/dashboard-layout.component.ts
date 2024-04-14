import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { DrawerComponent } from "@app/features/(protected)/layout/drawer/drawer.component";
import { HeaderComponent } from "@app/shared/ui/header/header.component";

@Component({
  selector: "app-dasboard-layout",
  standalone: true,
  imports: [DrawerComponent, HeaderComponent, RouterOutlet],
  template: `
    <div class="flex w-full">
      <app-drawer> </app-drawer>
      <div class="flex flex-col h-full w-full">
        <app-header></app-header>
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
})
export class DashboardLayout {}
