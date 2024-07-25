import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../../service/business.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { CustomHttpResponse } from 'src/app/shared/interface/httpResponse';

@Component({
  selector: 'app-business-page',
  templateUrl: './business-page.component.html',
  styleUrls: ['./business-page.component.css']
})
export class BusinessPageComponent implements OnInit {

  httpResponse!: CustomHttpResponse;
  business!: any;
  selectedTab!: string;
  isLoading: boolean = true;
 
  constructor(private bService: BusinessService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const snapshot: ActivatedRouteSnapshot = this.route.snapshot;
    this.selectedTab = snapshot.queryParams["tab"] || "about";

    this.route.queryParams.subscribe(params => {
      this.selectedTab = params["tab"] || "about";
    });

    this.route.paramMap.subscribe((paramsMap) => {
      let businessId = paramsMap.get("name");
      if (businessId) {
        this.bService.businessPage(businessId).subscribe(
          (data) => {
            console.log({data});
            
            this.httpResponse = data;
            this.business = this.httpResponse.data
            this.isLoading = false;
          },
          (error) => {
            console.log(error);
            this.isLoading = false;
          }
        )
      }
    })
  }

  changeTab(tab: string) {
    this.selectedTab = tab;
    this.router.navigate(["/business", this.business.name], {
      relativeTo: this.route,
      queryParams: { tab: tab },
      queryParamsHandling: "merge"
    })
  }

}
