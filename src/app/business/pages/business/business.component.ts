import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../../service/business.service';
import { Business } from '../../interface/business';
import { CustomHttpResponse } from 'src/app/shared/interface/httpResponse';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit{
  businesses: Business[] = [];
  httpResponse!: CustomHttpResponse;
  loading: boolean = true;

  constructor(private businessService: BusinessService){}

  ngOnInit(): void {
    this.businessService.allBusinessPages().subscribe(
      (data) => {
        this.httpResponse = data;
         this.businesses = this.httpResponse.data.content;
         this.loading = false;
         console.log(data.data);
         
      },
      (error) => {
        console.log(error);
        this.loading = false;
      }
    )
  }

}
