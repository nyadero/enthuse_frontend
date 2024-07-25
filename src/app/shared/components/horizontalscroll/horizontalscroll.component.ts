import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-horizontalscroll',
  templateUrl: './horizontalscroll.component.html',
  styleUrls: ['./horizontalscroll.component.css']
})
export class HorizontalscrollComponent {
  @ViewChild("scrollContent") scrollContent!: ElementRef;
  @Input() scrollableItems: any[] = [];

  scrollNext() {
    this.scrollContent.nativeElement.scrollTo({
      left: this.scrollContent.nativeElement.srollLeft + 250,
      behaviour: 'smooth'
    })
  }

  scrollPrevious() {
    this.scrollContent.nativeElement.scrollTo({
      left: this.scrollContent.nativeElement.srollLeft - 250,
      behaviour: 'smooth'
    })
  }
}
