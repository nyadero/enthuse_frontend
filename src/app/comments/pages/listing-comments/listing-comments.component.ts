import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../../comments.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CommentInterface } from '../../interface/comment.interface';

@Component({
  selector: 'app-listing-comments',
  templateUrl: './listing-comments.component.html',
  styleUrls: ['./listing-comments.component.css']
})
export class ListingCommentsComponent implements OnInit {
  listingId: any;
  comments: CommentInterface[] = [];
  isLoading : boolean = true;

  constructor(private commentsService: CommentsService, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      const listingId = params.get("id");
      console.log({listingId});
      if(listingId){
        this.listingId = listingId;
       this.commentsService.allListingInquiries(listingId).subscribe(
         (data) => {;
           this.comments = data.data.content;
           this.isLoading = false;
         },
         (error) => {
          this.isLoading = false;
         }
       ) 
      }
    })
  }

}
