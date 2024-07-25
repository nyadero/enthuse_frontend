import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BusinessService } from '../../service/business.service';
import { Business } from '../../interface/business';

@Component({
  selector: 'app-add-vehicle-listing',
  templateUrl: './add-vehicle-listing.component.html',
  styleUrls: ['./add-vehicle-listing.component.css']
})
export class AddVehicleListingComponent implements OnInit {
  business!: Business;
  constructor(private businessService: BusinessService, private activatedRoute: ActivatedRoute) { }

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
