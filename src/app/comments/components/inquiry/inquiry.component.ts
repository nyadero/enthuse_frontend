import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommentsService } from 'src/app/comments/comments.service';
import { CommentInterface } from 'src/app/comments/interface/comment.interface';
import { ActiveComment } from '../../interface/active-comment';
import { ActiveCommentTypeEnum } from '../../enums/active-comment.enum';
import { UserInterface } from 'src/app/shared/interface/user';
import { LocalstorageService } from 'src/app/shared/service/localstorage.service';
import { NotificationService } from 'src/app/shared/service/notification.service';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css']
})
export class InquiryComponent implements OnInit {
  constructor(private localStorage: LocalstorageService, private commentsService: CommentsService, private notificationService: NotificationService) { }
  isShowReplyInput: boolean = false;
  @Input() inquiry!: CommentInterface;
  canDelete: boolean = false;
  canEdit: boolean = false;
  canReply: boolean = false;
  user!: UserInterface;
  replies: CommentInterface[] = [];
  @Output() setActiveInquiry = new EventEmitter<ActiveComment | null>();
  activeInquiryType = ActiveCommentTypeEnum;
  @Output() addInquiry = new EventEmitter<{ inquiry: any, parentId: any | null }>();
  inquiryId!: string;
  @Input() parentId!: string;
  @Input() activeInquiry: ActiveComment | null = null;
  @Output() deleteInquiry = new EventEmitter<string>();
  isReply: boolean = false;
  showReplies: boolean = false;

  ngOnInit(): void {
    this.inquiryId = this.parentId;
    this.parentId = this.inquiry.id;
    this.user = this.localStorage.getItem();
    this.canDelete = this.user.id == this.inquiry.user.id;
    this.canEdit = this.user.id == this.inquiry.user.id;
    this.canReply = Boolean(this.user);

      this.commentsService.inquiryReplies(this.inquiry.id).subscribe(
      (data) => {
        console.log(data);
        this.replies = data.data;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  isReplying(): boolean {
    if (!this.activeInquiry) {
      return false;
    }
    return (
      this.activeInquiry.id == this.inquiry.id && this.activeInquiry.type == this.activeInquiryType.replying
    );
  }

  isEditing(): boolean {
    if (!this.activeInquiry) {
      return false;
    }
    return (
      this.activeInquiry.id == this.inquiry.id && this.activeInquiry.type == this.activeInquiryType.editing
    );
  }


  getNewInquiry(inquiry: any) {
    this.replies.unshift(inquiry);
    // this.isShowReplyInput = false;
    this.setActiveInquiry.emit(null); // or emit a default state
  }


  deleteInquiryReply(inquiryId: string) {
    this.commentsService.deleteInquiry(inquiryId).subscribe(
      (data) => {
        // this.httpResponse = data;
        console.log({ data });
        this.notificationService.showSnackbar(data.message, data.status);
        // this.replies = this.replies.filter(inquiry => inquiry.id != inquiryId);
      }
    )
  }

  replyComment(commentId: string) {
    console.log("replying to " + commentId);
    this.isShowReplyInput = true;
    this.commentsService.replyToComment(commentId, null).subscribe(
      (data) => {
         console.log(data);    
        //  this.replies = this.replies.unshift(data.data);    
         this.activeInquiry = null; 
      },
      (error) => {
        console.log({error});     
      }
    )
  }
 

  showCommentReplies() {
    this.showReplies = !this.showReplies;
  }

}
