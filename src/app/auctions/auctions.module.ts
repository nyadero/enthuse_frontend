import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuctionsRoutingModule } from './auctions-routing.module';
import { AuctionComponent } from './components/auction/auction.component';
import { NewAuctionComponent } from './pages/new-auction/new-auction.component';
import { AuctionsComponent } from './pages/auctions/auctions.component';
import { CoreModule } from '../shared/core.module';
import { AuctionPageComponent } from './pages/auction-page/auction-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClassifiedsModule } from '../classifieds/classifieds.module';
import { VehicleAuctionFormComponent } from './pages/vehicle-auction-form/vehicle-auction-form.component';
import { MotorbikeAuctionFormComponent } from './pages/motorbike-auction-form/motorbike-auction-form.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NewBidComponent } from './components/new-bid/new-bid.component';



@NgModule({
  declarations: [
    NewAuctionComponent,
    AuctionComponent,
    AuctionsComponent,
    AuctionPageComponent,
    VehicleAuctionFormComponent,
    MotorbikeAuctionFormComponent,
    NewBidComponent
  ],
  imports: [
    CommonModule,
    RouterModule, 
    AuctionsRoutingModule,
    CoreModule,
    ReactiveFormsModule,
    ClassifiedsModule,
    CKEditorModule,
  ], 
  exports:[
  ]
})
export class AuctionsModule { }
