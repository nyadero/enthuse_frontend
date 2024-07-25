import { Component, OnInit } from '@angular/core';
import { BusinessService } from 'src/app/business/service/business.service';
import { CustomHttpResponse } from '../../interface/httpResponse';

@Component({
  selector: 'app-my-business',
  templateUrl: './my-business.component.html',
  styleUrls: ['./my-business.component.css']
})
export class MyBusinessComponent implements OnInit{
  loading: boolean = true;
  httpResponse!: CustomHttpResponse;
  businessPages: any[] = []

  constructor(private businessService: BusinessService){}

  ngOnInit(): void {
     this.businessService.userBusinessPages().subscribe(
      (data) => {
        this.httpResponse = data;
        this.businessPages = data.data
        this.loading = false
      },
      (error) => {
        console.log(error);
        this.loading = false;
      }
    )
  }
}
