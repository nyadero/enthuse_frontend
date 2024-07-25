import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClubPageComponent } from './pages/club-page/club-page.component';
import { NewClubComponent } from './pages/new-club/new-club.component';
import { ClubsComponent } from './pages/clubs/clubs.component';
import { ClubComponent } from './components/club/club.component';
import { RouterModule } from '@angular/router';
import { ClubsRoutingModule } from './clubs-routing.module';
import { ClubPostsComponent } from './components/club-posts/club-posts.component';
import { ClubMembersComponent } from './components/club-members/club-members.component';
import { ClubEventsComponent } from './components/club-events/club-events.component';
import { ClubGarageComponent } from './components/club-garage/club-garage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserClubsComponent } from './components/user-clubs/user-clubs.component';
import { JoinedClubsComponent } from './components/joined-clubs/joined-clubs.component';
import { CoreModule } from '../shared/core.module';



@NgModule({
  declarations: [
    ClubPageComponent,
    NewClubComponent,
    ClubsComponent,
    ClubComponent,
    ClubPostsComponent,
    ClubMembersComponent,
    ClubEventsComponent,
    ClubGarageComponent,
    UserClubsComponent,
    JoinedClubsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ClubsRoutingModule,
    ReactiveFormsModule,
    CoreModule
  ],
  exports:[
    ClubsComponent
  ]
})
export class ClubsModule { }
