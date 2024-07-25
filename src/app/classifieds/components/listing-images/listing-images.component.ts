import { Component, Input, OnInit } from '@angular/core';
import { FilesService } from 'src/app/files/files.service';
import { FileInterface } from 'src/app/files/interface/file.interface';

@Component({
  selector: 'app-listing-images',
  templateUrl: './listing-images.component.html',
  styleUrls: ['./listing-images.component.css']
})
export class ListingImagesComponent implements OnInit {
  listingFiles: FileInterface[] = [];
  isLoading: boolean = true;
  @Input() listingId!: string;

  constructor(private filesService: FilesService){}

  ngOnInit(): void {
    this.filesService.getListingFiles(this.listingId).subscribe(
      (data) => {
        this.listingFiles = data.data;
        console.log(data);
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
      }
    )
  }

}
