import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BusinessService } from '../../service/business.service';
import { RatingsService } from '../../service/ratings.service';
import { NotificationService } from 'src/app/shared/service/notification.service';

@Component({
  selector: 'app-new-rating',
  templateUrl: './new-rating.component.html',
  styleUrls: ['./new-rating.component.css']
})
export class NewRatingComponent implements OnInit {
  @Output() cancelRating = new EventEmitter<boolean>();
  @Input() businessId!: string;
  ratingForm!: FormGroup;
  currentRating: number = 0;

  constructor(
    private ratingService: RatingsService,
     private formBuilder: FormBuilder,
      private notificationService: NotificationService
    ) { }

  ngOnInit(): void {
    this.ratingForm = this.formBuilder.group({
      review: ["", [Validators.required]],
      rating: ["", [Validators.required]]
    })
  }

  cancelRatinAction() {
    this.cancelRating.emit(false);
  }

  addRating() {
    // const formData = {review: this.ratingForm.value, rating: this.currentRating};
    const formData = new FormData();
    formData.append("review", this.ratingForm.value.review);
    formData.append("rating", this.currentRating.toString());
    console.log({formData});
    this.ratingService.newBusinessRating(this.businessId, formData).subscribe(
      (data) => {
         this.notificationService.showSnackbar(data.message, data.status);
         console.log(data);
      },
      (error) => {

      }
    )
  }


  ratingChanged(rating: number) {
    this.currentRating = rating;
  }

}
