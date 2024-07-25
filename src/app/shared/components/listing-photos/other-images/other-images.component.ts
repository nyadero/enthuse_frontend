import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FileInterface } from 'src/app/files/interface/file.interface';

@Component({
  selector: 'app-other-images',
  templateUrl: './other-images.component.html',
  styleUrls: ['./other-images.component.css']
})
export class OtherImagesComponent {
  @Input() otherImages: FileInterface[] = [];
  @Output() imageSelected = new EventEmitter<FileInterface>();
  selectedImage!: FileInterface; // Variable to keep track of the selected image
  imageLoaded: boolean = false;

  selectImage(image: FileInterface) {
    console.log(image);
    this.imageSelected.emit(image);
    this.selectedImage = image; // Update the selected image
    this.imageLoaded = false;
  }

}
