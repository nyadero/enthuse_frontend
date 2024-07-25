import { Component, OnInit } from '@angular/core';
import { AuctionsService } from '../../service/auctions.service';
import { AuctionInterface } from '../../interface/auction.interface';
import { CustomHttpResponse } from 'src/app/shared/interface/httpResponse';

@Component({
  selector: 'app-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.css']
})
export class AuctionsComponent implements OnInit {
  auctions: AuctionInterface[] = [];
  httpResponse!: CustomHttpResponse;
  isLoading: boolean = true;

  constructor(
    private auctionsService: AuctionsService
  ){}

  ngOnInit(): void {
    this.auctionsService.fetchAllAuctions().subscribe(
      (data) => {
         this.httpResponse = data;
         this.auctions = this.httpResponse.data.content;
         this.isLoading = false;
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    )
  }

}
