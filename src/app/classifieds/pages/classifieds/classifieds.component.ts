import { Component, HostListener } from '@angular/core';
import { MarketplaceService } from '../../service/marketplace.service';
import { Listing } from '../../interface/listing';
import { ActivatedRoute, Params } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { CustomHttpResponse } from 'src/app/shared/interface/httpResponse';
import { FilterService } from 'src/app/shared/service/filter.service';

@Component({
  selector: 'app-classifieds',
  templateUrl: './classifieds.component.html',
  styleUrls: ['./classifieds.component.css']
})
export class ClassifiedsComponent {
onPageChange($event: PageEvent) {
throw new Error('Method not implemented.');
}

  httpResponse!: CustomHttpResponse;
  listings: Listing[] = []; // fetched array of listings
  filteredListings: Listing[] = [];
  allListingsCount: number = 0;
  vehicleListingsCount: number = 0;
  motorbikeListingsCount: number = 0;
  bicycleListingsCount: number = 0;
  boatListingsCount: number = 0;
  sparepartListingsCount: number = 0;
  airplaneListingsCount: number = 0;
  loadingListings: boolean = true;
  currentPage: number = 0;
  totalListingsFetched: number = 0;
  totalAvailableListings: number = 0;


  constructor(private marketplaceService: MarketplaceService, private filterService: FilterService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
       this.currentPage = 0; // reset current page whenever params change
      this.listings = []; // clear existing listings
      if (Object.keys(params).length === 0) {
        // If there are no query parameters, fetch all vehicles
        this.loadListings();
      } else {
        // If there are query parameters, fetch vehicles based on the parameters
        this.searchListings(params);
      }
    })
  }

  searchListings(params: any) {
    this.marketplaceService.listingsByNameOrLocation(params).subscribe(
      (data) => {
        console.log({data});
        this.listings = data.data;
        this.loadingListings = false;
      }
    )
  }

  // function to load data
  loadListings() {
     this.marketplaceService.getAllListings(this.currentPage).subscribe(
      (data) => {
        this.httpResponse = data;
        this.listings = this.listings.concat(this.httpResponse.data.listingList.content);
        console.log({data});
        this.allListingsCount = this.httpResponse.data.listingsCount;
        this.vehicleListingsCount = this.httpResponse.data.vehicleListingsCount;
        this.motorbikeListingsCount = this.httpResponse.data.motorbikeListingsCount;
        this.bicycleListingsCount = this.httpResponse.data.bicycleListingsCount;
        this.sparepartListingsCount = this.httpResponse.data.sparesListingsCount;
        this.loadingListings = false;     
        this.totalListingsFetched += this.httpResponse.data.listingList.numberOfElements;
        this.totalAvailableListings = this.httpResponse.data.listingList.totalElements;
        this.loadingListings = false;
      },
      (error) => {
        console.log(error.message);
        this.loadingListings = false;
      }
    )
  }

  // listen to scroll event
  @HostListener("window:scroll", [`$event`])
  onScroll(event: Event) {
     if(window.innerHeight + window.scrollY >= document.body.scrollHeight && this.totalListingsFetched < this.totalAvailableListings){
      this.currentPage++;
        this.activatedRoute.queryParams.subscribe(params => {
     
      if (Object.keys(params).length === 0) {
        // If there are no query parameters, fetch all vehicles
        this.loadListings();
      } else {
        // If there are query parameters, fetch vehicles based on the parameters
        this.searchListings(params);
      }
    })
     }
  }

}
