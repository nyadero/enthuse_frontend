import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  selectedTab!: string;

constructor(private router: Router, private activatedRoute: ActivatedRoute){}

ngOnInit(): void {
   const snapshot: ActivatedRouteSnapshot = this.activatedRoute.snapshot;
    this.selectedTab = snapshot.queryParams["tab"] || "account";

     this.activatedRoute.queryParams.subscribe(params => {
      this.selectedTab = params["tab"] || "account";
    });
}

changeTab(tab: string) {
  this.selectedTab = tab;
  this.router.navigate(["/dashboard"], {
      relativeTo: this.activatedRoute,
      queryParams: { tab: tab },
      queryParamsHandling: "merge"
    })
}

}
