import { Component, Input } from '@angular/core';
import { FileInterface } from 'src/app/files/interface/file.interface';

@Component({
  selector: 'app-image-loader',
  templateUrl: './image-loader.component.html',
  styleUrls: ['./image-loader.component.css']
})
export class ImageLoaderComponent {
  isLoading: boolean = true;
  
  @Input() file!: FileInterface;

  imageLoaded(): void{
    this.isLoading = false;
  }
}
