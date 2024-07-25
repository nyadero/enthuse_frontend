import { Component, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarketplaceService } from '../../service/marketplace.service';
import { FilterService } from 'src/app/shared/service/filter.service';

@Component({
  selector: 'app-motorbikes-searchbar',
  templateUrl: './motorbikes-searchbar.component.html',
  styleUrls: ['./motorbikes-searchbar.component.css']
})
export class MotorbikesSearchbarComponent {

  // @ViewChild("scrollableDiv") scrollableDiv!: ElementRef;
  scrollPosition: number = 0;
  @Output() emitShowFilterEvent = new EventEmitter<boolean>()
  isShowFilters: boolean = true;

  queryParams: { [key: string]: string } = {};
  @Input() filters: any;

  constructor(
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private filterService: FilterService,
      private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.queryParams = this.activatedRoute.snapshot.queryParams;
    console.log({queryParams: this.queryParams});
    console.log(this.activatedRoute.snapshot);
    
  }

  deleteFilter(key: any) {
     if (this.queryParams.hasOwnProperty(key)) {
      this.filterService.deleteFilter(key);

      // Create a new object without the specified key
      const updatedQueryParams = { ...this.queryParams };
      delete updatedQueryParams[key];

      this.filters = this.filterService.getFilters();
      console.log({ params: updatedQueryParams, filters: this.filters });
      this.queryParams = updatedQueryParams

      this.router.navigate([], {
        relativeTo: this.activatedRoute,
        queryParams: updatedQueryParams,
        replaceUrl: true // replace current url without adding a new entry to history
      });
    }
  }


  // // listen to scroll event
  // @HostListener("window:scroll", [`$event`])
  // onScroll(event: Event) {
  //   this.scrollPosition = window.pageYOffset;
  //   const scrollElement = this.scrollableDiv.nativeElement;

  //   // this.scrollableDiv.nativeElement.style.top = window.pageYOffset.toString().concat("px");
  //   if (this.scrollPosition >= 305) {
  //     this.renderer.addClass(scrollElement, "sticky")
  //   } else {
  //     this.renderer.removeClass(scrollElement, "sticky")
  //   }
  //   this.scrollableDiv.nativeElement.scrollTo({
  //     top: this.scrollableDiv.nativeElement.scrollTop,
  //     behavior: "smooth"
  //   })

  // }

  showFilters() {
    this.isShowFilters = !this.isShowFilters;
    this.emitShowFilterEvent.emit(this.isShowFilters);
  }

}
