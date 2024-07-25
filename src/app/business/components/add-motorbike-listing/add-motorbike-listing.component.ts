import { Component, OnInit } from '@angular/core';
import { Business } from '../../interface/business';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BusinessService } from '../../service/business.service';

@Component({
  selector: 'app-add-motorbike-listing',
  templateUrl: './add-motorbike-listing.component.html',
  styleUrls: ['./add-motorbike-listing.component.css']
})
export class AddMotorbikeListingComponent implements OnInit{
  business!:Business;

  constructor(private businessService: BusinessService, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
     this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      const name = params.get("name");
      console.log(name);
      if (name) {
        this.businessService.businessPage(name).subscribe(
          (data) => {
            this.business = data.data;
          },
          (error) => {
            console.log(error);

          }
        )
      }
    });
  }

}
