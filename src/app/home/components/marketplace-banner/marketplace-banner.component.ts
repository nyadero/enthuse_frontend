import { Component, OnInit } from '@angular/core';
import { MarketplaceService } from 'src/app/classifieds/service/marketplace.service';
import { CustomHttpResponse } from 'src/app/shared/interface/httpResponse';

@Component({
  selector: 'app-marketplace-banner',
  templateUrl: './marketplace-banner.component.html',
  styleUrls: ['./marketplace-banner.component.css']
})
export class MarketplaceBannerComponent implements OnInit {
  allListings: number = 0;
  vehicleListings: number = 0;
  motorbikeListings: number = 0;
  httpResponse!: CustomHttpResponse;
  isLoading: Boolean = true;

  constructor(private marketplaceService: MarketplaceService){}


  ngOnInit(): void {
    this.marketplaceService.getListingNumbers().subscribe(
      (data) => {
        this.allListings = data.data.totalListings;
        this.vehicleListings = data.data.vehicleListings;
        this.motorbikeListings = data.data.motorbikeListings;
        this.httpResponse = data;
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
      }
    )
  }

}
