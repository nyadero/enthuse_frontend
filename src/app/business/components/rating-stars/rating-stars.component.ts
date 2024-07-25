import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rating-stars',
  templateUrl: './rating-stars.component.html',
  styleUrls: ['./rating-stars.component.css']
})
export class RatingStarsComponent {
  maxStars: number = 5;
  stars!: number[];
  @Output() valueChange = new EventEmitter<number>();
  @Input() selectedValue : number = 0;
  @Input() isNewRating: boolean = false;

  constructor(){
    this.stars = Array(this.maxStars).fill(0).map((x, i) => i + 1);
  }

rate(value: number) {
  this.selectedValue = value;
  this.valueChange.emit(this.selectedValue);
}

}
