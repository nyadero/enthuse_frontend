import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gobal-search',
  templateUrl: './gobal-search.component.html',
  styleUrls: ['./gobal-search.component.css']
})
export class GobalSearchComponent implements OnInit {

  selectedTab!: string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const snapshot = this.activatedRoute.snapshot;
    this.selectedTab = snapshot.queryParams["tab"] || "profiles";

    this.activatedRoute.queryParams.subscribe(params => {
      this.selectedTab = params["tab"] || "profiles";
    })
  }

  changeTab(tab: string) {
    this.selectedTab = tab;
     this.router.navigate(["/search"], {
      relativeTo: this.activatedRoute,
      queryParams: { tab: tab, query: null },
      queryParamsHandling: "merge"
    })
  }

}
