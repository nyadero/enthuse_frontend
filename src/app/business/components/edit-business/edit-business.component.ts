import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BusinessService } from '../../service/business.service';
import { Business } from '../../interface/business';
import { CustomHttpResponse } from 'src/app/shared/interface/httpResponse';
import { NotificationService } from 'src/app/shared/service/notification.service';

@Component({
  selector: 'app-edit-business',
  templateUrl: './edit-business.component.html',
  styleUrls: ['./edit-business.component.css']
})
export class EditBusinessComponent implements OnInit {

  businessForm!: FormGroup;
  httResponse!: CustomHttpResponse;
  @Input() business!: Business;

   constructor(
    private formBuilder: FormBuilder,
     private businessService: BusinessService,
      private notificationService: NotificationService
    ){}

  ngOnInit(): void {

    this.fetchBusiness(this.business.name);
    
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


  fetchBusiness(businessName: string){
      this.businessService.businessPage(businessName).subscribe(
          (data) => {
            this.httResponse = data;
            this.businessForm.patchValue(data.data);
          },
          (error) => {
            console.log("error");
          }
        )
  }


  editBusinessPage() {
    this.businessService.updateBusinessPage(this.business.id, this.businessForm.value).subscribe(
      (data) => {
         this.notificationService.showSnackbar(data.message, data.status)
      },
      (error)=>{
        
      }
    )
}
}
