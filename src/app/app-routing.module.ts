import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Role } from './authentication/enum/roles.enum';
import { rolePermissions } from './authentication/interface/roles-permission.interface';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';
import { AuthenticationGuard } from './shared/service/authguard.service';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },

  {
    path: "enthuze",
    loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)
  },

  {
    path: 'dashboard',
    canActivate: [AuthenticationGuard],
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },

  {
    path: "auctions",
    loadChildren: () => import('./auctions/auctions.module').then(m => m.AuctionsModule)
  },

  {
    path: "auth",
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
  },

  {
    path: "chat",
    canActivate: [AuthenticationGuard],
    loadChildren: () => import('./messaging/messaging.module').then(m => m.MessagingModule)
  },

  {
    path: "classifieds",
    loadChildren: () => import('./classifieds/classifieds.module').then(m => m.ClassifiedsModule)
  },

  {
    path: "business",
    loadChildren: () => import('./business/business.module').then(m => m.BusinessModule)
  },

  {
    path: "search",
    loadChildren: () => import('./search/search.module').then(m => m.SearchModule)
  },

  {
    path: "clubs",
    loadChildren: () => import('./clubs/clubs.module').then(m => m.ClubsModule)
  },

  {
    path: "notifications",
    canActivate: [AuthenticationGuard],
    loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsModule)
  },

  {
    path: "garages",
    loadChildren: () => import('./garage/garage.module').then(m => m.GarageModule)
  },

  {
    path: "meetups",
    loadChildren: () => import('./meetups/meetups.module').then(m => m.MeetupsModule)
  },

   {
    path: "users",
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
 
  {
     path: "roam",
     loadChildren: () => import('./roam/roam.module').then(m => m.RoamModule)
  },

  {
    path: "admin",
    loadChildren: () => import("./admin-dashboard/admin-dashboard.module").then(m => m.AdminDashboardModule),
    canActivate: [AuthenticationGuard],
    data: { roles: [Role.ADMIN], permissions: rolePermissions.ADMIN }
  },

  {
    path: "**",
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
