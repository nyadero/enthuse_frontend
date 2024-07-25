import { Component, Input } from '@angular/core';
import { AuctionInterface } from '../../interface/auction.interface';

@Component({
  selector: 'app-auction', 
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css']
})
export class AuctionComponent {
  @Input() auction!: AuctionInterface;
}
