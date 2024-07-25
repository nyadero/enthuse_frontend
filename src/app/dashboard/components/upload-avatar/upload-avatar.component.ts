import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/authentication/service/authentication.service';
import { UserInterface } from 'src/app/shared/interface/user';
import { LocalstorageService } from 'src/app/shared/service/localstorage.service';
import { UserService } from 'src/app/users/service/user.service';

@Component({
  selector: 'app-upload-avatar',
  templateUrl: './upload-avatar.component.html',
  styleUrls: ['./upload-avatar.component.css']
})
export class UploadAvatarComponent implements OnInit {
  @Input() isuploadingAvatar: boolean = true;
  selectedFiles: File[] = [];
  imagePreviews: string[] = [];
  uploadAvatarForm!: FormGroup;
  user!: UserInterface;
  isEditingAvatar: boolean = false;

  constructor(private formBuilder: FormBuilder, private userService:UserService, private localStorage: LocalstorageService) { }

  ngOnInit(): void {
    this.user = this.localStorage.getItem();
    this.uploadAvatarForm = this.formBuilder.group({
      avatar: ["", [Validators.required]]
    })
  }

  onSelectedFilesChanged(file: File[]) {
    this.selectedFiles = file;
  }

  uploadAvatar() {
    const formData = new FormData();
    this.selectedFiles.forEach((photo: Blob) => {
      formData.append("avatar", photo)
    })

    this.userService.uploadAvatar(formData).subscribe(
      (data) => {
        console.log(data);
        this.localStorage.updateAvatar(data.data);
      },
      (error) => {
        console.log(error);
      }
    )
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
