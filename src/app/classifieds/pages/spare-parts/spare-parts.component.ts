import { Component, OnInit } from '@angular/core';
import { MarketplaceService } from '../../service/marketplace.service';

@Component({
  selector: 'app-spare-parts',
  templateUrl: './spare-parts.component.html',
  styleUrls: ['./spare-parts.component.css']
})
export class SparePartsComponent implements OnInit {
  spareParts: any[] = [];

  constructor(
    private marketplaceService: MarketplaceService
  ){}

  ngOnInit(): void {
    this.marketplaceService.sparePartsListings(0).subscribe(
      (data)=>{
         this.spareParts = data.data.content;
      },
      (error)=>{
        console.log(error);
      }
    )
  }
}
