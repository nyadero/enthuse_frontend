import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GarageInterface } from 'src/app/garage/interface/garage-interface';
import { GarageService } from 'src/app/garage/service/garage.service';

@Component({
  selector: 'app-garage-details',
  templateUrl: './garage-details.component.html',
  styleUrls: ['./garage-details.component.css']
})
export class GarageDetailsComponent implements OnInit{
   garage!: GarageInterface;
   garageId: any;
   isSeeMore: boolean = false;

  constructor(private garageService: GarageService, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      const garageId = params.get("garageId");
      if(garageId){
            this.garageId = garageId;
             this.garageService.getGarage(garageId).subscribe(
              (data) => {
                this.garage = data.data;
              }
             )
      }
    })
  }
}
