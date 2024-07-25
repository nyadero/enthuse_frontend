import { Component, OnInit } from '@angular/core';
import { Business } from 'src/app/business/interface/business';
import { BusinessService } from 'src/app/business/service/business.service';
import { CustomHttpResponse } from 'src/app/shared/interface/httpResponse';

@Component({
  selector: 'app-my-business-pages',
  templateUrl: './my-business-pages.component.html',
  styleUrls: ['./my-business-pages.component.css']
})
export class MyBusinessPagesComponent implements OnInit {

  businesses: Business[] = [];
  httpResponse!: CustomHttpResponse;

  constructor(private businessService: BusinessService) { }

  ngOnInit(): void {
    this.businessService.userBusinessPages().subscribe(
      (data) => {
        this.httpResponse = data;
        this.businesses = data.data;
      },
      (error) => {
        console.log("Error " + error);

      }
    )
  }


  deleteBusiness(businessId: string) {
    this.businesses = this.businesses.filter(business => business.id != businessId);
  }

}
