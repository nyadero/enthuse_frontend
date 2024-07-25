import { Component, OnInit } from '@angular/core';
import { GarageInterface } from '../../interface/garage-interface';
import { GarageService } from '../../service/garage.service';

@Component({
  selector: 'app-userliked-garages',
  templateUrl: './userliked-garages.component.html',
  styleUrls: ['./userliked-garages.component.css']
})
export class UserlikedGaragesComponent implements OnInit {
  garages: GarageInterface[] = [];
  currentPage: number = 0;

  constructor(private garageService:GarageService){}

  ngOnInit(): void {
    this.garageService.userLikedGarages(this.currentPage).subscribe(
      (data) => {
        console.log({data});
        this.garages = data.data;
      },
      (error) => {

      }
    )
  }

  

}
