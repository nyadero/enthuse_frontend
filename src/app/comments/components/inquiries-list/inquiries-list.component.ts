import { Component, Input, OnInit } from '@angular/core';
import { CommentsService } from 'src/app/comments/comments.service';
import { CommentInterface } from 'src/app/comments/interface/comment.interface';
import { ActiveComment } from '../../interface/active-comment';
import { CustomHttpResponse } from 'src/app/shared/interface/httpResponse';

@Component({
  selector: 'app-inquiries-list',
  templateUrl: './inquiries-list.component.html',
  styleUrls: ['./inquiries-list.component.css']
})
export class InquiriesListComponent implements OnInit {
  httpResponse!: CustomHttpResponse;
  inquiriesList: CommentInterface[] = [];
  isShowReplyInput: boolean = false; //
  @Input() listingId!: string;
  @Input() garageId!: string;
  @Input() postId!: string; 
  activeInquiry: ActiveComment | null = null;
  @Input() isSeeMoreHidden: boolean = false;


  constructor(private commentsService: CommentsService) { }

  ngOnInit(): void {
    if(this.listingId){
      this.getListingComments(this.listingId);
    } 
    if(this.garageId){
      this.getGarageComments(this.garageId);
    }
    if(this.postId){
      this.getPostComments(this.postId);
    }
  }

  getNewInquiry(inquiry: any) {
    this.inquiriesList.unshift(inquiry);
  }

  setActiveInquiry(activeInquiry: ActiveComment | null) {
    console.log({activeInquiry});
    this.activeInquiry = activeInquiry;
  }

  addInquiry({ inquiry, parentId }: { inquiry: string; parentId: string; }) {
    console.log({ inquiry, parentId });
    console.log("replying to this inquiry");
    this.commentsService.replyToComment(parentId, inquiry).subscribe(
      (data) => {
        console.log(data);
        this.inquiriesList = [...this.inquiriesList, data.data];
        this.activeInquiry = null;
      }
    )
  }

  deleteInquiry(inquiryId: string) {
    this.commentsService.deleteInquiry(inquiryId).subscribe(
      (data) => {
        this.httpResponse = data;
        console.log({data});
        
        // this.inquiriesList = this.inquiriesList.filter(inquiry => inquiry.id != inquiryId);
      }
    )
  }

  // fetch garage inquiries
  getGarageComments(garageId: string){
     this.commentsService.allGarageItemComments(garageId).subscribe(
      (data) => {
        console.log({ data });
        this.httpResponse = data;
        this.inquiriesList = this.httpResponse.data.content;
      },
      (error) => {
        console.log(error);
      }
    )
  } 

  // fetch post comments
  getPostComments(postId: string){
     this.commentsService.allPostComments(postId).subscribe(
      (data) => {
        console.log({ inquiries: data.data });
        this.httpResponse = data;
        this.inquiriesList = this.httpResponse.data.content;
      },
      (error) => {
        console.log({ error: error });
      }
    )
  }

  // fetch listing comments
  getListingComments(listingId: string){
      this.commentsService.allListingInquiries(listingId).subscribe(
      (data) => {
        console.log({ inquiries: data.data });
        this.httpResponse = data;
        this.inquiriesList = this.httpResponse.data.content;
      },
      (error) => {
        console.log({ error});
      }
    )
  }

}
