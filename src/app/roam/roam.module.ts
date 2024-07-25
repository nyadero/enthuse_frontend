import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoamComponent } from './pages/roam/roam.component';
import { RoamRoutingModule } from './roam-routing.module';



@NgModule({
  declarations: [
    RoamComponent
  ],
  imports: [
    CommonModule,
    RoamRoutingModule
  ]
})
export class RoamModule { }
