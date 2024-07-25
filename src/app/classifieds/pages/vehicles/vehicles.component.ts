import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute, Router, NavigationExtras, NavigationEnd } from '@angular/router';
import { Listing } from '../../interface/listing';
import { MarketplaceService } from '../../service/marketplace.service';
import { Subject, filter, take } from 'rxjs';
import { PostInterface } from 'src/app/posts/interface/post-interface';
import { Location } from '@angular/common';
import { CustomHttpResponse } from 'src/app/shared/interface/httpResponse';
import { FilterService } from 'src/app/shared/service/filter.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  category: string = "vehicles";
  httpResponse!: CustomHttpResponse;
  listingsList: Listing[] = [];
  error: string = "";
  isShowFilters!: boolean;
  currentPage: number = 0;
  filters: any;
  snapshot!: ActivatedRouteSnapshot;
  loadingListings: boolean = true;
  activepath!: string;
  totalListingsFetched: number = 0;
  totalAvailableListings: number = 0;
  @ViewChild("scrollableDiv") scrollableDiv!: ElementRef;
  @ViewChild("filterContainer") filterContainer!: ElementRef;
  scrollPosition: number = 0;
  // In your component
  isFilterVisible: boolean = true; // Initially set it to true 
    currentQueryParams: any;



  constructor(private activatedRoute: ActivatedRoute, private marketplaceService: MarketplaceService, private router: Router,
    private filterService: FilterService, private renderer: Renderer2, private location: Location
  ) {
    this.filters = this.filterService.getFilters();
  }


  ngOnInit(): void {
     this.activatedRoute.queryParams.subscribe(params => {
    this.currentPage = 0;
    this.listingsList = [];
     this.currentQueryParams = params;
      this.handleQueryParams();
  });

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

  showFilters() {
    this.isShowFilters = !this.isShowFilters;
    console.log(this.isShowFilters);
  }

  private fetchVehicleListings() {
    this.marketplaceService.vehiclesListing(this.currentPage).subscribe(
      (data) => {
        this.httpResponse = data;
        // this.listingsList = [];
        this.listingsList = this.listingsList.concat(data.data.content);
        console.log(data);
        this.totalListingsFetched += this.httpResponse.data.numberOfElements;
        this.totalAvailableListings = this.httpResponse.data.totalElements;
        this.loadingListings = false;
      },
      (error) => {
        console.log(error);
        this.error = error.error.message;
        this.loadingListings = false;
      }
    );
  }

  // Function to search and filter vehicle listings
  private searchVehicleListings(filters: any) {
     if (this.currentPage === 0) {
    // For the initial search, reset counts
    this.totalAvailableListings = 0;
    this.totalListingsFetched = 0;
  }

    this.marketplaceService.searchVehicleListings(filters, this.currentPage).subscribe(
      (data) => {
        this.httpResponse = data;
        // this.listingsList = []; // clear previous listings
        this.listingsList = this.listingsList.concat(data.data.content); // Replace existing list with filtered data
        console.log(data);
        this.totalListingsFetched += this.httpResponse.data.numberOfElements;
        this.totalAvailableListings = this.httpResponse.data.totalElements;
        this.loadingListings = false;
      },
      (error) => {
        console.log(error);
        this.error = error.error.message;
        this.loadingListings = false;
      }
    );
  }


  // listen to scroll event
  @HostListener("window:scroll", [`$event`])
  onScroll(event: Event) {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight && this.totalListingsFetched < this.totalAvailableListings) {
      console.log({currentPage: this.currentPage});
      this.currentPage++;
      console.log({ currentPage: this.currentPage });
     // Use the stored query parameters
      this.handleQueryParams();
    }
  }

    private handleQueryParams() {
    console.log({ params: this.currentQueryParams });
    if (Object.keys(this.currentQueryParams).length === 0) {
      this.fetchVehicleListings();
    } else {
      this.searchVehicleListings(this.currentQueryParams);
    }
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


  clearFilters() {
    this.filterService.clearFilters();
    this.filters = this.filterService.getFilters();
    this.router.navigate(["/classifieds/vehicles"]);
    this.fetchVehicleListings();
  }




  getShowFiltersEvent(filterStatus: boolean) {
    this.isShowFilters = filterStatus;
    this.isFilterVisible = filterStatus;
    if (this.isShowFilters == true) {
      this.filterContainer.nativeElement.style.display = "block";
    }
    if (this.isShowFilters == false) {
      this.filterContainer.nativeElement.style.display = "none";
    }
  }


  showVehicleFilters() {
    this.isShowFilters = !this.isShowFilters;
    // this.emitShowFiltersEvent.emit(this.isShowFilters);
  }

}


