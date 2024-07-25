import { Component, Input } from '@angular/core';
import { Listing } from 'src/app/classifieds/interface/listing';
import { FileInterface } from 'src/app/files/interface/file.interface';
import { ListingType } from '../../enums/listing-type';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {
  @Input() listing!: Listing;
  isLoadingFile: boolean = false;
  listingType = Object.create(ListingType);
  

  imageLoaded(): void{
    this.isLoadingFile = false;
  }

}
