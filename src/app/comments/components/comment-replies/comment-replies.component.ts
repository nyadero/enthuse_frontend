import { Component, Input, OnInit } from '@angular/core';
import { CommentsService } from '../../comments.service';
import { CommentInterface } from '../../interface/comment.interface';
import { ActiveComment } from '../../interface/active-comment';

@Component({
  selector: 'app-comment-replies',
  templateUrl: './comment-replies.component.html',
  styleUrls: ['./comment-replies.component.css']
})
export class CommentRepliesComponent implements OnInit{

  @Input() commentId!: string;
  @Input() inquiry!: CommentInterface;
  replies: CommentInterface[] = [];
  activeInquiry: ActiveComment|null = null;
  setActiveInquiry: any;

  constructor( private commentsService: CommentsService) { }

  ngOnInit(): void {
     this.commentsService.inquiryReplies(this.commentId).subscribe(
      (data) => {
        console.log(data);
        this.replies = data.data;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  deleteInquiryReply($event: string) {
throw new Error('Method not implemented.');
}

}
