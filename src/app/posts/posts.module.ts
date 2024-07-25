import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostslistComponent } from './components/postslist/postslist.component';
import { RouterModule } from '@angular/router';


import { MatIconModule } from '@angular/material/icon';
import { SocialRoutingModule } from './social-routing.module';
import { PostdetailsComponent } from './pages/postdetails/postdetails.component';
import { FeedComponent } from './components/feed/feed.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DiscoverComponent } from './components/discover/discover.component';
import { EnthuseComponent } from './pages/enthuse/enthuse.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FollowedComponent } from './components/followed/followed.component';
import { RatingStarsComponent } from './components/rating-stars/rating-stars.component';
import { FollowRequestsComponent } from './components/follow-requests/follow-requests.component';
import { CommentsModule } from "../comments/comments.module";
import { CoreModule } from '../shared/core.module';

@NgModule({
    declarations: [
        FeedComponent,
        PostslistComponent,
        PostdetailsComponent,
        DiscoverComponent,
        EnthuseComponent,
        FollowedComponent,
        RatingStarsComponent,
        FollowRequestsComponent,
    ],
    exports: [
        PostslistComponent,
        DiscoverComponent,
        FeedComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatIconModule,
        SocialRoutingModule,
        ReactiveFormsModule,
        CoreModule,
        MatSnackBarModule,
        CommentsModule
    ]
})
export class PostsModule { }
