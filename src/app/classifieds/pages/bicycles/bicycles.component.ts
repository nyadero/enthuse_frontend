import { Component, OnInit } from '@angular/core';
import { MarketplaceService } from '../../service/marketplace.service';

@Component({
  selector: 'app-bicycles',
  templateUrl: './bicycles.component.html',
  styleUrls: ['./bicycles.component.css']
})
export class BicyclesComponent implements OnInit{
  bicycles: any[] = [];

  constructor(
    private marketplaceService: MarketplaceService
  ){}

  ngOnInit(): void {
    this.marketplaceService.bicycleListings(0).subscribe(
      (data)=>{
         this.bicycles = data.data.content;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}
