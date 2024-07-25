import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent {
  selectedFiles: File[] = [];
  imagePreviews: string[] = [];
  @Input() styleMethod!: string;

  @Output() selectedFilesChanged: EventEmitter<File[]> = new EventEmitter<File[]>();


  onFileSelected(event: any): void {
    const files: FileList = event.target.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        this.selectedFiles.push(file);

        // Check if the file is an image
        if (file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            this.imagePreviews.push(reader.result as string);
          };
        } else {
          // Handle non-image files here (e.g., display a generic icon)
          this.imagePreviews.push('path/to/generic-icon.png');
        }

        // Emit the selected files to the parent component
        this.selectedFilesChanged.emit(this.selectedFiles);
      }
    }
  }

  removeImage(index: number): void {
    this.selectedFiles.splice(index, 1);
    this.imagePreviews.splice(index, 1);
    this.selectedFilesChanged.emit(this.selectedFiles);
  }

}
