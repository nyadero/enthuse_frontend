import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { UserInterface } from 'src/app/shared/interface/user';
import { NotificationService } from 'src/app/shared/service/notification.service';

import { UserService } from 'src/app/users/service/user.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutForm!: FormGroup;
  interests: string[] = [];
  brands: string[] = [];
  user!: UserInterface;


  constructor(private userService: UserService, private notificationService: NotificationService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.userService.fetchUser().subscribe(
      (data) => {
        console.log({ data });
        this.user = data.data;
        this.aboutForm.patchValue(data.data);
      }
    )


    this.aboutForm = this.formBuilder.group({
      name: ["", []],
      username: ["", []],
      about: ["", []],
      interests: this.formBuilder.control([]),
      brands: this.formBuilder.control([]),
      location: [],
      contactInfo: this.formBuilder.group({
        phone1: [],
        phone2: [],
        website: [],
        twitter: [],
        linkedin: [],
        instagram: [],
        facebook: []
      })
    })


  }


  updateInfo() {
    console.log(this.aboutForm.value);
    this.userService.updateUserInfo(this.aboutForm.value).subscribe(
      (data) => {
        this.notificationService.showSnackbar(data.message, data.status);
      }
    )
  }

  getEmittedTags(interests: string[]) {
    this.interests = interests;
    this.aboutForm.get("interests")?.setValue(interests);
  }

  getEmittedBrands(brands: string[]) {
    this.brands = brands;
    this.aboutForm.get("brands")?.setValue(brands);
  }

}
