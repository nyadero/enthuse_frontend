import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import '@angular/compiler';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuctionsModule } from './auctions/auctions.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { MessagingModule } from './messaging/messaging.module';
import { MatIconModule } from "@angular/material/icon";
import {MatProgressBarModule} from "@angular/material/progress-bar"
import { HomeModule } from './home/home.module';
import { BusinessModule } from './business/business.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ClassifiedsModule } from './classifieds/classifieds.module';
import { SearchModule } from './search/search.module';
import { NotificationsModule } from './notifications/notifications.module';
import { GarageModule } from './garage/garage.module';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { ClubsModule } from './clubs/clubs.module';
import { CoreModule } from './shared/core.module';
import { RoamModule } from './roam/roam.module';
import { MeetupsModule } from './meetups/meetups.module';
import { HttpInterceptorService } from './shared/service/http-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    AuctionsModule,
    AuthenticationModule,
    PostsModule,
    MessagingModule,
    UsersModule,
    HomeModule,
    // BusinessModule,
    MeetupsModule,
    // DashboardModule,
    MatIconModule,
    ClassifiedsModule,
    SearchModule,
    GarageModule,
    NotificationsModule,
    MatProgressBarModule,
    CommentsModule,
    ClubsModule,
    RoamModule,
    LoadingBarRouterModule,
    LoadingBarHttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
