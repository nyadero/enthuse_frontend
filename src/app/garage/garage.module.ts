import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GarageDetailsComponent } from './components/garage-details/garage-details.component';
import { NewVehicleComponent } from './components/new-vehicle/new-vehicle.component';
import { NewMotorbikeComponent } from './components/new-motorbike/new-motorbike.component';
import { GarageRoutingModule } from './garage-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommentsModule } from "../comments/comments.module";
import { GaragesComponent } from './pages/garages/garages.component';
import { UserGarageComponent } from './components/user-garage/user-garage.component';
import { JoinClubComponent } from './components/join-club/join-club.component';
import { UserlikedGaragesComponent } from './components/userliked-garages/userliked-garages.component';
import { CoreModule } from '../shared/core.module';



@NgModule({
    declarations: [
        GarageDetailsComponent,
        NewVehicleComponent,
        NewMotorbikeComponent,
        GaragesComponent,
        UserGarageComponent,
        JoinClubComponent,
        UserlikedGaragesComponent
    ],
    imports: [
        CommonModule,
        GarageRoutingModule,
        ReactiveFormsModule,
        CoreModule,
        CommentsModule
    ],
    exports: [
        GaragesComponent,
        UserGarageComponent
    ]
})
export class GarageModule { }
