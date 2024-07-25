import { Component, Input, OnInit } from '@angular/core';
import { BusinessService } from '../../service/business.service';
import { CustomHttpResponse } from 'src/app/shared/interface/httpResponse';

@Component({
  selector: 'app-business-classifieds',
  templateUrl: './business-classifieds.component.html',
  styleUrls: ['./business-classifieds.component.css']
})
export class BusinessClassifiedsComponent implements OnInit{
  
  @Input() business: any;
  classifieds: any[] = [];
  httpResponse!: CustomHttpResponse;

  constructor(private businessService: BusinessService){}

  ngOnInit(): void {
    this.businessService.businessClassifieds(this.business.id).subscribe(
      (data) => {
        this.classifieds = data.data;
        this.httpResponse = data;
      },
      (error) => {
        console.log(error);
      }
    )
  }


}
