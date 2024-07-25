import { Component, OnInit } from '@angular/core';
import { ClubsService } from '../../service/clubs.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from 'ngx-editor';
import { NotificationService } from 'src/app/shared/service/notification.service';

@Component({
  selector: 'app-new-club',
  templateUrl: './new-club.component.html',
  styleUrls: ['./new-club.component.css']
})
export class NewClubComponent implements OnInit{
  clubForm!: FormGroup;
  selectedLogo: File[] = [];
  selectedCoverPic: File[] = [];
  imagePreviews: string[] = [];

  constructor(private clubsService: ClubsService, private formBuilder: FormBuilder, private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.clubForm = this.formBuilder.group({
      clubName: ["", [Validators.required]],
      clubDescription: ["", [Validators.required]],
      clubAccessibility: ["", [Validators.required]]
    })
  }

  // Implement the method to receive the selected files
  onSelectedFilesChanged(files: File[]) {
    this.selectedLogo = files;

  }


  onSelectedLogoChanged(coverPic: File[]) {
    this.selectedCoverPic = coverPic;
  }

  submitForum() {
    const values = this.clubForm.value;
    const formData = new FormData();
    formData.append("clubName", values.clubName);
    formData.append("clubDescription", values.clubDescription);
    formData.append("clubAccessibility", values.clubAccessibility);
    this.selectedLogo.forEach((photo: Blob) => {
      formData.append("logo", photo)
    });
    this.selectedCoverPic.forEach((photo: Blob) => {
      formData.append("coverPic", photo)
    });

    this.clubsService.newclub(formData).subscribe(
      (data) => {
        this.notificationService.showSnackbar(data.message, data.status);
        console.log({data});
      }
    )
  }

}
