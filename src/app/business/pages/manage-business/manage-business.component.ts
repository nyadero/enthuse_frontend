import { Component, OnInit } from '@angular/core';
import { Business } from '../../interface/business';
import { BusinessService } from '../../service/business.service';
import { ActivatedRoute, ActivatedRouteSnapshot, ParamMap, Router } from '@angular/router';
import { CustomHttpResponse } from 'src/app/shared/interface/httpResponse';

@Component({
  selector: 'app-manage-business',
  templateUrl: './manage-business.component.html',
  styleUrls: ['./manage-business.component.css']
})
export class ManageBusinessComponent implements OnInit {

  business!: Business;
  httResponse!: CustomHttpResponse;
  selectedTab!: string;
  isUploadingCoverPic: boolean = false;
  isUploadingLogo: boolean = false;

  constructor(private businessService: BusinessService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const snapshot: ActivatedRouteSnapshot = this.activatedRoute.snapshot;
    this.selectedTab = snapshot.queryParams["tab"] || "edit";

    this.activatedRoute.queryParams.subscribe(params => {
      this.selectedTab = params["tab"] || "edit";
    });


    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      const businessName = params.get("name");
      if (businessName) {
        this.businessService.businessPage(businessName).subscribe(
          (data) => {
            console.log({ data });

            this.httResponse = data;
            this.business = data.data;
          },
          (error) => {
            console.log("error");
          }
        )
      }
    })
  }


  changeTab(tab: string) {
    this.selectedTab = tab;
    this.router.navigate(["/business", this.business.name, "manage"], {
      relativeTo: this.activatedRoute,
      queryParams: { tab: tab },
      queryParamsHandling: "merge"
    })
  }

  editCoverPic() {
    this.isUploadingCoverPic = true;
  }

  editLogo(){
    this.isUploadingLogo = true;
  }


}
