import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditVehicleComponent } from "../classifieds/edit-listing-forms/edit-vehicle/edit-vehicle.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { ClassifiedsAccountComponent } from "./pages/classifieds-account/classifieds-account.component";
import { LayoutComponent } from "../shared/components/layout/layout.component";

const routes: Routes = [
    {
        path: "",
        component: LayoutComponent,
        children: [
            {
                path: "",
                component: DashboardComponent,
            },
            {
                path: "classifieds",
                component: ClassifiedsAccountComponent,
            },
            {
                path: "classifieds/edit/:id",
                component: EditVehicleComponent,
            },
        ]
           
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {

}