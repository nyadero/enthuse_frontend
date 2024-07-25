import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { FileInterface } from 'src/app/files/interface/file.interface';

@Component({
  selector: 'app-dashboard-nav',
  templateUrl: './dashboard-nav.component.html',
  styleUrls: ['./dashboard-nav.component.css']
})
export class DashboardNavComponent implements OnInit {

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

   currentSlideIndex = 0;
  @Input() items: FileInterface[] = [];
  

  nextSlide() {
    // Logic to move to the next slide
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.items.length ;
  }

  previousSlide() {
    // Logic to move to the previous slide
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.items.length ) % this.items.length ;
  }

   isAtFirstSlide(): boolean {
    return this.currentSlideIndex === 0;
  }

  isAtLastSlide(): boolean {
    return this.currentSlideIndex === this.items.length - 1;
  }

}
