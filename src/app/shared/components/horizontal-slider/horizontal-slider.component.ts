import { Component, Input } from '@angular/core';
import { FileInterface } from 'src/app/files/interface/file.interface';

@Component({
  selector: 'app-horizontal-slider',
  templateUrl: './horizontal-slider.component.html',
  styleUrls: ['./horizontal-slider.component.css']
})
export class HorizontalSliderComponent {
   currentSlideIndex = 0;
  @Input() items: FileInterface[] = [];
  

  nextSlide() {
    // Logic to move to the next slide
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.items.length ;
  }

  previousSlide() {
    // Logic to move to the previous slide
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.items.length ) % this.items.length ;
  }

   isAtFirstSlide(): boolean {
    return this.currentSlideIndex === 0;
  }

  isAtLastSlide(): boolean {
    return this.currentSlideIndex === this.items.length - 1;
  }

}


