import { Injectable, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClassifiedsComponent } from "./pages/classifieds/classifieds.component";
import { ListingbyidComponent } from "./pages/listingbyid/listingbyid.component";
import { NewListingComponent } from "./pages/new-listing/new-listing.component";
import { EditMotorbikeComponent } from "./pages/edit-motorbike/edit-motorbike.component";
import { MotorbikesComponent } from "./pages/motorbikes/motorbikes.component";
import { VehiclesComponent } from "./pages/vehicles/vehicles.component";
import { ListingCommentsComponent } from "../comments/pages/listing-comments/listing-comments.component";
import { BicyclesComponent } from "./pages/bicycles/bicycles.component";
import { SparePartsComponent } from "./pages/spare-parts/spare-parts.component";
import { AirplanesComponent } from "./pages/airplanes/airplanes.component";
import { BoatsComponent } from "./pages/boats/boats.component";
import { LayoutComponent } from "../shared/components/layout/layout.component";
import { MotorbikeformComponent } from "../shared/components/motorbikeform/motorbikeform.component";
import { VehicleformComponent } from "../shared/components/vehicleform/vehicleform.component";

const roots: Routes = [
    {
        path: "",
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: ClassifiedsComponent,
                data: { title: "Classifieds" }
            },
            {
                path: "new-listing",
                component: NewListingComponent,
                data: { title: "Add new classified" }

            },
            {
                path: "new-vehicle",
                component: VehicleformComponent,
                data: { title: "New vehicle classified" }

            },
            {
                path: "new-motorbike",
                component: MotorbikeformComponent,
                data: { title: "New Motorbike classified" }

            },
         
            {
                path: "vehicles",
                component: VehiclesComponent,
                data: { title: "Vehicle classifieds" }

            },
            {
               path: "motorbikes",
               component: MotorbikesComponent,
                data: { title: "Motorbike classifieds" }
             },
             {
                path: "bicycles",
                component: BicyclesComponent,
                 data: { title: "Bicycles classifieds" }
              },
              {
                path: "boats",
                component: BoatsComponent,
                 data: { title: "boats classifieds" }
              },
              {
                path: "spare-parts",
                component: SparePartsComponent,
                 data: { title: "Spare parts classifieds" }
              },
              {
                path: "airplanes",
                component: AirplanesComponent,
                 data: { title: "airplane classifieds" }
              },
            {
                path: "comments/:id",
                component: ListingCommentsComponent,
                data: { title: "Classified comments" }
            },
               {
                path: ":id",
                component: ListingbyidComponent,
                data: { title: "Classified Information" }
            },
            {
                path: "edit-motorbike/:listingId",
                component: EditMotorbikeComponent,
                data: { title: "Edit motorbike classified" }
            },
          
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(roots)],
    exports: [RouterModule]
})
export class ClassifiedsRoutingModule { }