import { Component, Input, OnInit } from '@angular/core';
import { FileInterface } from 'src/app/files/interface/file.interface';

@Component({
  selector: 'app-listing-photos',
  templateUrl: './listing-photos.component.html',
  styleUrls: ['./listing-photos.component.css']
})
export class ListingPhotosComponent implements OnInit{

  @Input() listingPhotos: FileInterface[] = [];
  @Input() selectedImage!: FileInterface;

  constructor(){}

  ngOnInit(): void {
    console.log({photos: this.listingPhotos});
    this.selectedImage = this.listingPhotos[0];
    console.log({selected: this.selectedImage});
    
  }

  onImageSelected(image: FileInterface) : void {
    this.selectedImage = image;
    console.log(this.selectedImage);
  }

}
