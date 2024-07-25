import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './user-routing.module';
import { UserGarageComponent } from './components/user-garage/user-garage.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import { PostsComponent } from './components/posts/posts.component';
import { RouterModule } from '@angular/router';
import { ProfilesComponent } from './pages/profiles/profiles.component';
import { CoreModule } from '../shared/core.module';


@NgModule({
  declarations: [
    UserGarageComponent,
    ProfileComponent,
    ProfileDetailsComponent,
    ProfileInfoComponent,
    PostsComponent,
    ProfilesComponent
  ],
  exports: [
    UserGarageComponent,
    ProfilesComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    CoreModule,
    RouterModule
  ]
})
export class UsersModule { }
