import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GarageDetailsComponent } from "./components/garage-details/garage-details.component";
import { NewVehicleComponent } from "./components/new-vehicle/new-vehicle.component";
import { NewMotorbikeComponent } from "./components/new-motorbike/new-motorbike.component";
import { GarageCommentsComponent } from "../comments/pages/garage-comments/garage-comments.component";
import { JoinClubComponent } from "./components/join-club/join-club.component";
import { GaragesComponent } from "./pages/garages/garages.component";
import { UserGarageComponent } from "./components/user-garage/user-garage.component";
import { UserlikedGaragesComponent } from "./components/userliked-garages/userliked-garages.component";
import { LayoutComponent } from "../shared/components/layout/layout.component";

const routes : Routes = [
   {
        path: "",
        component: LayoutComponent,
        children: [
            {
               path: "",
               component: GaragesComponent,
               data: {
                title: "Garages"
               }
            },
            {
                path: "new-vehicle",
                component: NewVehicleComponent
            },
            {
                path: "new-motorbike",
                component: NewMotorbikeComponent
            },
            
            {
                path: "comments/:garageId",
                component: GarageCommentsComponent
            },
            {
                path: "join-club/:garageId",
                component: JoinClubComponent
            },
            {
                path: "user-garage",
                component: UserGarageComponent
            },
            {
                path: "liked-garages",
                component: UserlikedGaragesComponent
            },
            {
                path: ":garageId",
                component: GarageDetailsComponent
            },
        ]
    }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GarageRoutingModule{

}