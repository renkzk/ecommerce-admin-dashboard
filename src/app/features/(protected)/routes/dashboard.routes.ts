import { Routes } from "@angular/router";
import { DashboardHomeComponent } from "./dashboard-home/dashboard-home.component";
import { CustomersComponent } from "./customers/customers.component";
import { CategoriesComponent } from "./categories/categories.component";
import { ProductsComponent } from "./products/products.component";
import { OrdersComponent } from "./orders/orders.component";

export const routes: Routes = [
  {
    title: "Dashboard | Home",
    path: "",
    component: DashboardHomeComponent,
  },
  {
    title: "Dashboard | Customers",
    path: "customers",
    component: CustomersComponent,
  },
  {
    title: "Dashboard | Categories",
    path: "categories",
    component: CategoriesComponent,
  },
  {
    title: "Dashboard | Products",
    path: "products",
    component: ProductsComponent,
  },
  {
    title: "Dashboard | Orders",
    path: "orders",
    component: OrdersComponent,
  },
];
