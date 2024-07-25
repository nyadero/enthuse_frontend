import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { BusinessService } from '../../service/business.service';
import { NotificationService } from 'src/app/shared/service/notification.service';

@Component({
  selector: 'app-add-business',
  templateUrl: './add-business.component.html',
  styleUrls: ['./add-business.component.css']
})
export class AddBusinessComponent implements OnInit {

  pageTitle: string = "Create a page for your business";
  businessForm!: FormGroup;

  constructor(
    private title: Title,
     private formBuilder: FormBuilder,
      private businessService: BusinessService,
       private notificationService: NotificationService
      ) { }

  ngOnInit(): void {
    this.title.setTitle(this.pageTitle);


    this.businessForm = this.formBuilder.group({
      name: [],
      location: [],
      about: [],
      category: [],
      description: [],
      contactInfo: this.formBuilder.group({
        email: [],
        website: [],
        twitter: [],
        linkedin: [],
        instagram: [],
        facebook: []
      })
    })
  }


  addBusinessPage() {
     this.businessService.addBusinessPage(this.businessForm.value).subscribe(
      (data) => {
        this.notificationService.showSnackbar(data.message, data.status);
      },
      (error) => {
          this.notificationService.showSnackbar(error.message, "Error");
      }
     )
  }

}


// <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
//   <div>
//     <label for="email">Email:</label>
//     <input type="email" id="email" formControlName="email" />
//     <div *ngIf="contactForm.get('email').invalid && contactForm.get('email').touched">
//       Please enter a valid email.
//     </div>
//   </div>
//   <div>
//     <label for="phone">Phone:</label>
//     <input type="text" id="phone" formControlName="phone" />
//     <div *ngIf="contactForm.get('phone').invalid && contactForm.get('phone').touched">
//       Phone number is required.
//     </div>
//   </div>
//   <!-- Handling websites as an array -->
//   <div formArrayName="websites">
//     <div *ngFor="let website of contactForm.get('websites').controls; let i = index">
//       <input type="text" [formControlName]="i" />
//     </div>
//   </div>
//   <button type="submit" [disabled]="!contactForm.valid">Submit</button>
// </form>
