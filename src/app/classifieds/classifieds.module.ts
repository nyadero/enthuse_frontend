import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassifiedsRoutingModule } from './classifieds-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EditVehicleComponent } from './edit-listing-forms/edit-vehicle/edit-vehicle.component';
import { ListingbyidComponent } from './pages/listingbyid/listingbyid.component';
import { MotorbikesComponent } from './pages/motorbikes/motorbikes.component';
import { AeroplaneformComponent } from './pages/new-listing-forms/aeroplaneform/aeroplaneform.component';
import { BicycleformComponent } from './pages/new-listing-forms/bicycleform/bicycleform.component';
import { BoatformComponent } from './pages/new-listing-forms/boatform/boatform.component';
import { NewListingComponent } from './pages/new-listing/new-listing.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';
import { MatIconModule } from '@angular/material/icon';
import { ClassifiedsComponent } from './pages/classifieds/classifieds.component';
import { ContactSellerComponent } from './components/contact-seller/contact-seller.component';
import { SellerInfoComponent } from './components/seller-info/seller-info.component';
import { VehiclesSearchbarComponent } from './components/vehicles-searchbar/vehicles-searchbar.component';
import { MotorbikesSearchbarComponent } from './components/motorbikes-searchbar/motorbikes-searchbar.component';
import { EditMotorbikeComponent } from './pages/edit-motorbike/edit-motorbike.component';
import { VehiclesFilterComponent } from './components/vehicles-filter/vehicles-filter.component';
import { MotorbikesFilterComponent } from './components/motorbikes-filter/motorbikes-filter.component';
import { MatPaginatorModule } from "@angular/material/paginator"
import { CommentsModule } from '../comments/comments.module';
import { ListingImagesComponent } from './components/listing-images/listing-images.component';
import { ListingComponent } from './components/listing/listing.component';
import { CoreModule } from '../shared/core.module';
import { BicyclesComponent } from './pages/bicycles/bicycles.component';
import { SparePartsComponent } from './pages/spare-parts/spare-parts.component';
import { BoatsComponent } from './pages/boats/boats.component';
import { AirplanesComponent } from './pages/airplanes/airplanes.component';

@NgModule({
    declarations: [
        ClassifiedsComponent,
        NewListingComponent,
        BicycleformComponent,
        BoatformComponent,
        AeroplaneformComponent,
        ListingbyidComponent,
        EditVehicleComponent,
        SearchbarComponent,
        VehiclesComponent,
        ContactSellerComponent,
        SellerInfoComponent,
        VehiclesSearchbarComponent,
        MotorbikesSearchbarComponent,
        EditMotorbikeComponent,
        VehiclesFilterComponent,
        MotorbikesFilterComponent,
        MotorbikesComponent,
        ListingImagesComponent,
        ListingComponent,
        BicyclesComponent,
        SparePartsComponent,
        BoatsComponent,
        AirplanesComponent,
    ],
    imports: [
        CommonModule,
        ClassifiedsRoutingModule,
        CoreModule,
        ReactiveFormsModule,
        FormsModule,
        MatIconModule,
        CommonModule,
        MatPaginatorModule,
        CommentsModule
    ]
})
export class ClassifiedsModule { }
