import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminDashboardComponent } from "./pages/admin-dashboard/admin-dashboard.component";
import { LayoutComponent } from "../shared/components/layout/layout.component";

const routes: Routes = [
    {
      path: "",
      component: LayoutComponent,
      children: [
          {
              path: "",
              component: AdminDashboardComponent,
              // canActivate: [AuthenticationGuard],
              // data: { roles: [Role.ADMIN], permissions: [] }
          }
      ]
    }
  ]
  
  @NgModule({
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
  })
export class AdminRoutingModule{

}