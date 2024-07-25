import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BusinessService } from '../../service/business.service';
import { NotificationService } from 'src/app/shared/service/notification.service';

@Component({
  selector: 'app-upload-coverpic',
  templateUrl: './upload-coverpic.component.html',
  styleUrls: ['./upload-coverpic.component.css']
})
export class UploadCoverpictureComponent implements OnInit{
   selectedFiles: File[] = [];
  imagePreviews: string[] = [];
  @Input() businessId!: string;
  @Input() isUploadingLogo!: boolean;

  constructor(
    private formBuilder: FormBuilder,
     private businessService: BusinessService,
      private notificationService: NotificationService
    ){}

  ngOnInit(): void {
     this.uploadAvatarForm = this.formBuilder.group({
      coverPic: ["", [Validators.required]]
    })
  }

onSelectedFilesChanged(files: File[]) {
  this.selectedFiles = files;
}


uploadCoverpic() {
    const formData = new FormData();
    this.selectedFiles.forEach((photo: Blob) => {
      formData.append("multipartFile", photo)
    })

    if(!this.isUploadingLogo){
      this.updateCoverPic(formData);
    }else{
       this.updateLogo(formData);
    }
    
}

uploadAvatarForm!: FormGroup;

updateCoverPic(formData: any){
   this.businessService.updateBusinessCoverpic(this.businessId, formData).subscribe(
      (data) => {
        console.log(data);
        this.notificationService.showSnackbar(data.message, data.status);
      },
      (error) => {
        console.log(error);
      }
    )
}

updateLogo(formData: any){
   this.businessService.updateBusinessLogo(this.businessId, formData).subscribe(
      (data) => {
        console.log(data);
        this.notificationService.showSnackbar(data.message, data.status);
      },
      (error) => {
        console.log(error);
      }
    )
}

}
