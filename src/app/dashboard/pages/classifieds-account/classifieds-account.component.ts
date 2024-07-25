import { Component } from '@angular/core';
import { Listing } from 'src/app/classifieds/interface/listing';
import { MarketplaceService } from 'src/app/classifieds/service/marketplace.service';
import { CustomHttpResponse } from 'src/app/shared/interface/httpResponse';

@Component({
  selector: 'app-classifieds-account',
  templateUrl: './classifieds-account.component.html',
  styleUrls: ['./classifieds-account.component.css']
})
export class ClassifiedsAccountComponent {
imageLoaded() {
throw new Error('Method not implemented.');
}
  userListings: Listing[] = [];
  httpResponse!: CustomHttpResponse;
  loadingListings: boolean = true;
  isSold: boolean = false;

  constructor(private marketplaceService: MarketplaceService) { }


  ngOnInit(): void {
    this.marketplaceService.getUserListings().subscribe(
      (data) => {
        this.httpResponse = data;
        this.userListings = data.data;
        this.loadingListings = false;
        console.log({ userListings: this.userListings });

      },
      (error) => {
        this.loadingListings = false;
      }
    );
  }

  // delete classified
  deleteClassified(id: string) {
    alert("Delete listing " + id);
    this.marketplaceService.deleteListing(id).subscribe(
      (data) => {
        this.userListings = this.userListings.filter(listing => listing.id != id);
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  // delete all classifieds  
  deleteAllMyClassifieds() {
    this.marketplaceService.deleteAllUserListings().subscribe(
      (data) => {
        this.userListings = [];
      },
      (error) => {
        console.log(error);

      }
    )
  }

  getToggleValue(isSold: boolean) {
    this.isSold = isSold;
  }
}
