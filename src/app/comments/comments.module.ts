import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingCommentsComponent } from './pages/listing-comments/listing-comments.component';
import { GarageCommentsComponent } from './pages/garage-comments/garage-comments.component';
import { PostCommentsComponent } from './pages/post-comments/post-comments.component';
import { InquiriesListComponent } from './components/inquiries-list/inquiries-list.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommentRepliesComponent } from './components/comment-replies/comment-replies.component';
import { CoreModule } from '../shared/core.module';
import { InquiryInputComponent } from './components/inquiry-input/inquiry-input.component';
import { InquiryComponent } from './components/inquiry/inquiry.component';


@NgModule({
    declarations: [
        ListingCommentsComponent,
        GarageCommentsComponent,
        PostCommentsComponent,
        InquiriesListComponent,
        InquiryComponent,
        InquiryInputComponent,
        CommentRepliesComponent,
        
    ],
    imports: [
        CommonModule,
        CoreModule,
        RouterModule,
        ReactiveFormsModule
    ],
    exports: [
        InquiriesListComponent,
        InquiryComponent,
        InquiryInputComponent, 
    ]
})
export class CommentsModule { }
