import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomHttpResponse } from 'src/app/shared/interface/httpResponse';
import { UserInterface } from 'src/app/shared/interface/user';
import { LocalstorageService } from 'src/app/shared/service/localstorage.service';
import { NotificationService } from 'src/app/shared/service/notification.service';
import { CommentsService } from '../../comments.service';
import { ActiveComment } from '../../interface/active-comment';


@Component({
  selector: 'app-inquiry-input',
  templateUrl: './inquiry-input.component.html',
  styleUrls: ['./inquiry-input.component.css']
})
export class InquiryInputComponent implements OnInit {

  @Input() listingId: string | undefined = "";
  @Input() inquiryId: string  = "";
  @Input() garageId: string | undefined = "";
  @Input() postId: string | undefined = "";
  @Output() newInquiry = new EventEmitter<any>();
  @Input() submitLabel!: string;
  @Input() hasCancelButton: boolean = false;
  @Input() initialText: string = ''; 
  listingInquiryForm!: FormGroup;
  httpResponse!: CustomHttpResponse;
  user!: UserInterface;
  @Input() action: string = "POST";
  @Input() activeInquiry: ActiveComment | null = null;
  @Input() isReplying!: boolean;
  @Input() isEditing!: boolean;



  constructor(private commentsService: CommentsService, private formBuilder: FormBuilder,
     private localStorageService: LocalstorageService, private notificationService: NotificationService
     ) { 
    this.user = localStorageService.getItem();
    console.log({postId: this.postId});
    
  }

  ngOnInit(): void {
    console.log(this.activeInquiry);
    
    this.listingInquiryForm = this.formBuilder.group({
      comment: [this.initialText, [Validators.required]],
      commentId: [this.inquiryId],
    })
  }

  inquireListing() {
    console.log("commenting on post");
    
    if(this.action == "POST"){
      if (this.listingId) {
        this.commentOnListing(this.listingId);
      }
      if (this.garageId) {
        this.commentOnGarageItem(this.garageId);
      }
      if(this.postId){
        console.log(this.postId);
        this.commentOnPost(this.postId);
      }
    }

    if(this.action == "Edit"){
      console.log("Eiting inquiry");
      this.commentsService.updateInquiry(this.inquiryId, this.listingInquiryForm.value).subscribe(
        (data) => {
        console.log(data);   
        this.emitNewInquiry(data.data);
        this.listingInquiryForm.reset();
        this.activeInquiry = null;
        console.log({active: this.activeInquiry});
      },
      (error) => {
        console.log(error)
        this.notificationService.showSnackbar("Something went wrong", "ERROR");
      }
      )
    }

    // reply to comment
    if(this.action == "Reply"){
      this.commentsService.replyToComment(this.inquiryId, this.listingInquiryForm.value).subscribe(
         (data) => {
        console.log(data);   
        this.emitNewInquiry(data.data);
        this.listingInquiryForm.reset();
        this.activeInquiry = null;
        console.log({active: this.activeInquiry});
      },
      (error) => {
        console.log(error)
        this.notificationService.showSnackbar("Something went wrong", "ERROR");
      }
      )
    }
  }

  

  // emit newly added inquiry to the inquirylist
  emitNewInquiry(inquiry: any){
    this.newInquiry.emit(inquiry);
  }

  // comment on listing
  commentOnListing(listingId: string){
    console.log(listingId + "inquiry " + this.listingInquiryForm.value);
     this.commentsService.inquireListing(listingId, this.listingInquiryForm.value).subscribe(
      (data) => {
        console.log(data);   
        this.emitNewInquiry(data.data);
        this.listingInquiryForm.reset();
        this.activeInquiry = null;
        
        console.log({active: this.activeInquiry, replyState: this.isReplying});
        
      },
      (error) => {
        console.log(error.message);
      }
  )}

  // comment on garage item
  commentOnGarageItem(garageId: string){
    console.log(this.listingInquiryForm.value);
    console.log(garageId + "inquiry " + this.listingInquiryForm.value);

     this.commentsService.newGarageItemComment(garageId, this.listingInquiryForm.value).subscribe(
      (data) => {
        console.log(data);   
        this.emitNewInquiry(data.data);
        this.listingInquiryForm.reset();
        this.activeInquiry = null;
        
        console.log({active: this.activeInquiry, replyState: this.isReplying});
      },
      (error) => {
        console.log(error);
      }
  )}

  // comment on post
  commentOnPost(postId: string){
     console.log(postId + "inquiry " + this.listingInquiryForm.value);
     this.commentsService.newPostComment(postId, this.listingInquiryForm.value).subscribe(
      (data) => {
        console.log(data);   
        this.emitNewInquiry(data.data);
        this.listingInquiryForm.reset();
        this.activeInquiry = null;
        
        console.log({active: this.activeInquiry, replyState: this.isReplying});
      },
      (error) => {
        console.log(error);
      }
  )}

}
