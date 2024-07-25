import { Component } from '@angular/core';
import { Business } from '../../interface/business';
import { BusinessService } from '../../service/business.service';
import { CustomHttpResponse } from 'src/app/shared/interface/httpResponse';

@Component({
  selector: 'app-user-business',
  templateUrl: './user-business.component.html',
  styleUrls: ['./user-business.component.css']
})
export class UserBusinessComponent {

  businesses: Business[] = [];
  httpResponse!: CustomHttpResponse;
  isLoading: boolean = true;

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

  deletePage() {
    throw new Error('Method not implemented.');
    }

}
