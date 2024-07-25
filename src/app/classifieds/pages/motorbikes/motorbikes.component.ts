import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Listing } from '../../interface/listing';
import { MarketplaceService } from '../../service/marketplace.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { CustomHttpResponse } from 'src/app/shared/interface/httpResponse';
import { FilterService } from 'src/app/shared/service/filter.service';

@Component({
  selector: 'app-motorbikes',
  templateUrl: './motorbikes.component.html',
  styleUrls: ['./motorbikes.component.css']
})
export class MotorbikesComponent implements OnInit {
  // @ViewChild("filtersContainer") filtersContainer!: ElementRef;
  httpResponse!: CustomHttpResponse;
  listingsList: Listing[] = [];
  error: string = "";
  isShowFilters!: boolean;
  currentPage: number = 0;
  totalListingsFetched: number = 0;
  totalAvailableListings: number = 0;
  isFilterVisible: boolean = true; // Initially set it to true 
  filters: any
  currentQueryParams: any;

  constructor(
    private marketplaceService: MarketplaceService,
    private renderer: Renderer2,
    private filterService: FilterService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.filters = this.filterService.getFilters();
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.currentPage = 0; // reset current page whenever params change
      this.listingsList = []; // clear existing listings
      this.currentQueryParams = params;
      this.handleQueryParams()
    })


    // Subscribe to NavigationEnd events
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event => {
      // Check if it's a forward navigation
      const isForwardNavigation = this.router.getCurrentNavigation()?.previousNavigation === null;

      if (isForwardNavigation) {
        // Clear query parameters
        this.router.navigate([], {
          relativeTo: this.activatedRoute,
          queryParams: {},
          replaceUrl: true // replace current url without adding a new entry to history
        });
      }
    }));
  }

  fetchMotorbikeListings() {
    this.marketplaceService.motorbikeListings(this.currentPage).subscribe(
      (data) => {
        this.httpResponse = data;
        // this.listingsList = [];
        this.listingsList = this.listingsList.concat(data.data.content);
        console.log(data);
        this.totalListingsFetched += this.httpResponse.data.numberOfElements;
        this.totalAvailableListings = this.httpResponse.data.totalElements;
      },
      (error) => {
        console.log(error);
        this.error = error.error.message;
      }
    );
  }


  // listen to scroll event
  @HostListener("window:scroll", [`$event`])
  onScroll(event: Event) {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight && this.totalListingsFetched < this.totalAvailableListings) {
      this.currentPage++;
      console.log({ currentPage: this.currentPage });
      this.handleQueryParams()
    }
  }

  getShowFilterEvent(filterStatus: boolean) {
    this.isShowFilters = filterStatus;
    this.isFilterVisible = filterStatus;
    // if (this.isShowFilters == true) {
    //   this.filtersContainer.nativeElement.style.display = "block";
    // }
    // if (this.isShowFilters == false) {
    //   this.filtersContainer.nativeElement.style.display = "none";
    // }
  }

  private searchMotorbikeListings(filters: any) {
    if (this.currentPage === 0) {
      // For the initial search, reset counts
      this.totalAvailableListings = 0;
      this.totalListingsFetched = 0;
    }

    this.marketplaceService.searchMotorbikeListings(filters, this.currentPage).subscribe(
      (data) => {
        this.httpResponse = data;
        // this.listingsList = []; // clear previous listings
        this.listingsList = this.listingsList.concat(data.data.content); // Replace existing list with filtered data
        console.log(data);
        this.totalListingsFetched += this.httpResponse.data.numberOfElements;
        this.totalAvailableListings = this.httpResponse.data.totalElements;
      },
      (error) => {
        console.log(error);
        this.error = error.error.message;
      }
    );
  }

  // function to update query parameters without keeping history
  updateQueryParams(queryParams: any) {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: queryParams,
      queryParamsHandling: 'merge',
      replaceUrl: true // replace current url without adding a new entry to history
    });
  }


  private handleQueryParams() {
    console.log({ params: this.currentQueryParams });
    if (Object.keys(this.currentQueryParams).length === 0) {
      this.fetchMotorbikeListings();
    } else {
      this.searchMotorbikeListings(this.currentQueryParams);
    }
  }

}
