import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BidsService } from '../../service/bids.service';
import { BidInterface } from '../../interface/bid.interface';
import { WebsocketService } from 'src/app/shared/service/socket-client.service';

@Component({
  selector: 'app-new-bid',
  templateUrl: './new-bid.component.html',
  styleUrls: ['./new-bid.component.css']
})
export class NewBidComponent implements OnInit{
  newBidForm!: FormGroup;
  @Input() auctionId!: string;
  @Output() bid = new EventEmitter<BidInterface>();

  constructor(
    private formBuilder: FormBuilder,
    private bidsService: BidsService,
    private socketService: WebsocketService
  ){}

   
  ngOnInit(): void {
    this.newBidForm = this.formBuilder.group({
      amount: ["", [Validators.required]]
    })
  }


  sendBid() {
    this.socketService.send(`/app/bids/${this.auctionId}`, this.newBidForm.value);
    this.newBidForm.reset();
  }

}
