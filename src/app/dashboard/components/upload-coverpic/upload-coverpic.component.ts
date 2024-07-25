import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from 'ngx-editor';
import { UserInterface } from 'src/app/interface/user';
import { LocalstorageService } from 'src/app/service/localstorage.service';
import { NotificationService } from 'src/app/service/notification.service';
import { UserService } from 'src/app/users/service/user.service';

@Component({
  selector: 'app-upload-coverpic',
  templateUrl: './upload-coverpic.component.html',
  styleUrls: ['./upload-coverpic.component.css']
})
export class UploadCoverpicComponent {
   selectedFiles: File[] = [];
  imagePreviews: string[] = [];
  uploadAvatarForm!: FormGroup;
  user!: UserInterface;
  isEditingAvatar: boolean = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private localStorage: LocalstorageService, private notificationSevice: NotificationService) { }

  ngOnInit(): void {
    this.user = this.localStorage.getItem();
    this.uploadAvatarForm = this.formBuilder.group({
      avatar: ["", [Validators.required]]
    })
  }

  onSelectedFilesChanged(file: File[]) {
    this.selectedFiles = file;
  }

   uploadCoverpic() {
    const formData = new FormData();
    this.selectedFiles.forEach((photo: Blob) => {
      formData.append("coverPicture", photo)
    })

    this.userService.uploadCoverpic(formData).subscribe(
      (data) => {
        console.log(data);
        this.localStorage.updateCoverpic(data.data);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  toggleEdit() {
    this.isEditingAvatar = !this.isEditingAvatar;
  }

}
