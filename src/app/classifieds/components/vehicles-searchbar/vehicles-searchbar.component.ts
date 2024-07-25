import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { MarketplaceService } from '../../service/marketplace.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../../interface/listing';
import { FilterService } from 'src/app/shared/service/filter.service';

@Component({
  selector: 'app-vehicles-searchbar',
  templateUrl: './vehicles-searchbar.component.html',
  styleUrls: ['./vehicles-searchbar.component.css']
})
export class VehiclesSearchbarComponent implements OnInit {
  isShowFilters: boolean = false;
  searchVehiclesForm!: FormGroup;
  @ViewChild("scrollableDiv") scrollableDiv!: ElementRef;
  scrollPosition: number = 0;
  @Input() filters: any;
  @Output() emitDeleteFilterEvent = new EventEmitter<Listing[]>();
  @Output() emitShowFiltersEvent = new EventEmitter<boolean>();
  queryParams: { [key: string]: string } = {};

  constructor(
    private activatedRoute: ActivatedRoute,
     private marketplaceService: MarketplaceService,
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

      this.router.navigate([], {
        relativeTo: this.activatedRoute,
        queryParams: updatedQueryParams,
        replaceUrl: true // replace current url without adding a new entry to history
      });
    }
  }


  showFilters() {
    this.isShowFilters = !this.isShowFilters;
    this.emitShowFiltersEvent.emit(this.isShowFilters);
  }

}
