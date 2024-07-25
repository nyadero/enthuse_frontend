import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetupsComponent } from './pages/meetups/meetups.component';
import { RouterModule } from '@angular/router';
import { MeetupRoutingModule } from './meetups-routing.module';



@NgModule({
  declarations: [
    MeetupsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MeetupRoutingModule
  ]
})
export class MeetupsModule { }
