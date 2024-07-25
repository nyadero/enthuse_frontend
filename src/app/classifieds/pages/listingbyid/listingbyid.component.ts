import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MarketplaceService } from '../../service/marketplace.service';
import { Title } from '@angular/platform-browser';
import { Listing } from '../../interface/listing';
import { CustomHttpResponse } from 'src/app/shared/interface/httpResponse';
import { UserInterface } from 'src/app/shared/interface/user';
import { LocalstorageService } from 'src/app/shared/service/localstorage.service';

@Component({
  selector: 'app-listingbyid',
  templateUrl: './listingbyid.component.html',
  styleUrls: ['./listingbyid.component.css']
})
export class ListingbyidComponent implements OnInit {
  httpResponse!: CustomHttpResponse;
  listing!: Listing;
  similarListings: Listing[] = [];
  loggedInUser!: UserInterface;
  loadingListing: boolean = false;

  constructor(
    private marketplaceService: MarketplaceService, 
    private activatedRoute: ActivatedRoute, 
    private pageTitle: Title,
    private localStorage: LocalstorageService) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let listingId = params.get("id");
      if (listingId) {
        this.marketplaceService.getListing(listingId).subscribe(
          (data) => {
            console.log({data});
            this.httpResponse = data;
            this.listing = data.data;
            this.similarListings = data.data.similarListings;
            console.log(this.similarListings);
            console.log(data);
            this.pageTitle.setTitle(this.listing.name + " for sale");
            this.loadingListing = false;
          },
          (error) => {
            console.log(error.mesage);
          }
        )
      }
    })
  }


}
