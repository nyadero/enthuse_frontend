import { Component, OnInit } from '@angular/core';
import { AuctionInterface } from '../../interface/auction.interface';
import { AuctionsService } from '../../service/auctions.service';
import { ActivatedRoute } from '@angular/router';
import { BidInterface } from '../../interface/bid.interface';
import { CustomHttpResponse } from 'src/app/shared/interface/httpResponse';
import { WebsocketService } from 'src/app/shared/service/socket-client.service';

@Component({
  selector: 'app-auction-page',
  templateUrl: './auction-page.component.html',
  styleUrls: ['./auction-page.component.css']
})
export class AuctionPageComponent implements OnInit {
  auction!: AuctionInterface;
  bids: BidInterface[] = [];
  httpResponse!: CustomHttpResponse;
  isShowBid: boolean = false;
  messageSubject: any;


  constructor(
    private auctionsService: AuctionsService,
    private activatedRoute: ActivatedRoute,
    private socketClient: WebsocketService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const auctionId = params.get("auctionId");
      if (auctionId) {
        this.auctionsService.getAuction(auctionId).subscribe(
          (data) => {
            console.log({data});
            this.auction = data.data;
            this.bids = this.auction.bids;
          },
          (error) => {

          }
        )

        // subsribe to bids topic
        this.subscribeToBids(auctionId);
      }
    })
  }

  subscribeToBids(auctionId: string) {
   // Subscribe to chat messages after WebSocket connection is established
   this.socketClient.connect().subscribe(() => {
      this.socketClient.subscribeToAuctionBids(auctionId).subscribe(
        (message) => {
          console.log("Received message:", message);
          const parsedMessage = JSON.parse(message.body);
          console.log("Parsed message:", parsedMessage);
          const newMessage = parsedMessage.body.data;
          console.log("New message:", newMessage);
          this.bids = [newMessage, ...this.bids]
        },
        
        (error) => {
          console.error("Error occurred while subscribing to auction bids:", error);
        }
      );
  })}

  showBidForm() {
    this.isShowBid = !this.isShowBid;
  }

}
