import { Component, inject } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from "@angular/router";
import { AuthService } from "@app/features/auth/services/auth.service";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: "app-drawer",
  standalone: true,
  templateUrl: "./drawer.component.html",
  imports: [RouterModule, MatIconModule, TranslateModule],
})
export class DrawerComponent {
  //Dependencies
  public authService = inject(AuthService);

  public routes = [
    { name: "dashboard", icon: "storefront", path: "" },
    { name: "customers", icon: "groups", path: "/customers" },
    { name: "categories", icon: "category", path: "/categories" },
    { name: "products", icon: "shopping_bag", path: "/products" },
    { name: "orders", icon: "receipt_long", path: "/orders" },
  ];

  public logOut() {
    this.authService.logOut();
  }
}
