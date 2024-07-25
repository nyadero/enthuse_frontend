import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuctionsService } from '../../service/auctions.service';
import { AuctionInterface } from '../../interface/auction.interface';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { CustomHttpResponse } from 'src/app/shared/interface/httpResponse';

@Component({
  selector: 'app-new-auction',
  templateUrl: './new-auction.component.html',
  styleUrls: ['./new-auction.component.css']
})
export class NewAuctionComponent implements OnInit{
  selectedTab!: string;

  auction!: AuctionInterface;
  auctionForm!: FormGroup;
  httpResponse!: CustomHttpResponse;

  constructor(
    private auctionsService: AuctionsService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    const snapshot: ActivatedRouteSnapshot = this.activatedRoute.snapshot;
    this.selectedTab = snapshot.queryParams["tab"] || "account";

     this.activatedRoute.queryParams.subscribe(params => {
      this.selectedTab = params["tab"] || "account";
    });
  }

  submitAuction() {
    this.auctionsService.submitAuction(this.auctionForm.value).subscribe(
      (data) => {
         this.auction = data.data;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  changeTab(tab: string) {
    this.selectedTab = tab;
    this.router.navigate(["/auctions/new-auction"], {
        relativeTo: this.activatedRoute,
        queryParams: { tab: tab },
        queryParamsHandling: "merge"
      })
  }

}
