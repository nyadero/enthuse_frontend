import { Component, Input, OnInit } from '@angular/core';
import { FileInterface } from 'src/app/files/interface/file.interface';

@Component({
  selector: 'app-selected-image',
  templateUrl: './selected-image.component.html',
  styleUrls: ['./selected-image.component.css']
})
export class SelectedImageComponent{
 
  @Input() selectedImage!: FileInterface;
  imageLoaded: boolean = false;

   ngOnInit(): void {
    this.selectedImage = this.selectedImage;
    console.log(this.selectedImage);
  }
  
}
