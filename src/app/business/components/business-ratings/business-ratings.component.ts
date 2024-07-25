import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Rating } from '../../interface/rating';
import { RatingsService } from '../../service/ratings.service';
import { CustomHttpResponse } from 'src/app/shared/interface/httpResponse';

@Component({
  selector: 'app-business-ratings',
  templateUrl: './business-ratings.component.html',
  styleUrls: ['./business-ratings.component.css']
})
export class BusinessRatingsComponent implements OnInit {


  @Input() businessId!: string
  ratings: Rating[] = [];
  httpResponse!: CustomHttpResponse;
  addNewRating: boolean = false;
  canDelete: boolean = false;
  canEdit: boolean = false;

  constructor(private ratingService: RatingsService) { }

  ngOnInit(): void {

    this.ratingService.businessReviews(this.businessId).subscribe(
      (data) => {
        this.httpResponse = data;
        this.ratings = this.httpResponse.data;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  showNewRating() {
    this.addNewRating = true;
  }

  cancelRating(status: boolean) {
    console.log({ status });
    this.addNewRating = status;
  }

  deleteRating(ratingId: string) {
     this.ratingService.deleteRating(ratingId).subscribe(
      (data) => {
        this.ratings = this.ratings.filter(rating => rating.id != ratingId);
      }
     )
  }
}
