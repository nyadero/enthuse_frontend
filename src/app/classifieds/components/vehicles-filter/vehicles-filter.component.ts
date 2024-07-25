import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarketplaceService } from '../../service/marketplace.service';
import { Listing } from '../../interface/listing';
import { Observable, Subscription } from 'rxjs';
import { Location } from '@angular/common';
import { FilterService } from 'src/app/shared/service/filter.service';

@Component({
  selector: 'app-vehicles-filter',
  templateUrl: './vehicles-filter.component.html',
  styleUrls: ['./vehicles-filter.component.css']
})
export class VehiclesFilterComponent implements OnInit {
  priceRange: number;
  minPrice: number = 0;
  maxPrice: number = 10000; // Set your maximum price here
  filters: any;
  @Input() category!: string;
  searchResults: Listing[] = [];
  @Output() emitSearchResults = new EventEmitter<Listing[]>()
  carmakes = null;
  transmission_types = null;
  bodytypes = null;
  drivetrains = null;
  engine_layouts = null;
  engine_positions = null
  engine_aspirations = null;
  listing_owners = null;
  fueltypes = null;
  @Input() currentPage!: number;
  @Output() emitUpdatedQueries = new EventEmitter<any>();
  @ViewChild("scrollableDiv") scrollableDiv!: ElementRef;
  scrollPosition: number = 0;
  queryParams: any = {}
 

  constructor(
    private filterService: FilterService,
     private router: Router,
      private activatedRoute: ActivatedRoute
    ) {
    // Set initial slider value based on default min/max prices
    this.priceRange = this.maxPrice;
   }

  ngOnInit(): void {
    this.filters = this.filterService.getFilters();
    this.queryParams = this.activatedRoute.snapshot.queryParams;
    console.log({queryParams: this.queryParams}); 
  }

  updatePrices() {
    // Calculate min and max prices based on the slider position
    this.minPrice = (this.priceRange / 100) * this.maxPrice;
  }

  updateFilter(key: string, value: any) {
       this.filterService.setFilters(key, value)
      this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {...this.activatedRoute.snapshot.queryParams, [key] : value},
      queryParamsHandling: 'merge',
      replaceUrl: true // replace current url without adding a new entry to history
    });
  }

  
}
