import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BusinessComponent } from "./pages/business/business.component";
import { AddBusinessComponent } from "./components/add-business/add-business.component";
import { BusinessPageComponent } from "./pages/business-page/business-page.component";
import { ManageBusinessComponent } from "./pages/manage-business/manage-business.component";
import { AddVehicleListingComponent } from "./components/add-vehicle-listing/add-vehicle-listing.component";
import { AddMotorbikeListingComponent } from "./components/add-motorbike-listing/add-motorbike-listing.component";
import { UserBusinessComponent } from "./components/user-business/user-business.component";
import { LayoutComponent } from "../shared/components/layout/layout.component";

const routes: Routes = [{
    path: "",
    component: LayoutComponent,
    children: [
        {
            path: "",
            component: BusinessComponent
        },
        {
            path: "add-page",
            component: AddBusinessComponent
        },
        {
            path: "my-business",
            component: UserBusinessComponent,
            data: {
                title: "My business pages"
            }
        },
        {
            path: ":name",
            component: BusinessPageComponent
        },
        {
            path: ":name/manage",
            component: ManageBusinessComponent
        },
        {
            path: ":name/new-vehicle",
            component: AddVehicleListingComponent
        },
        {
            path: ":name/new-motorbike",
            component: AddMotorbikeListingComponent
        },
      
    ]
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BusinessRoutingModule{

}