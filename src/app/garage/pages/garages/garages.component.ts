import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GarageInterface } from '../../interface/garage-interface';
import { GarageService } from '../../service/garage.service';

@Component({
  selector: 'app-garages',
  templateUrl: './garages.component.html',
  styleUrls: ['./garages.component.css']
})
export class GaragesComponent implements OnInit {
  garages: GarageInterface[] = [];
  queryParams: any;
  isLoading: boolean = true;

  constructor(
    private garageService: GarageService,
     private route: Router, 
     private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.queryParams = params;
      console.log({ garageParams: this.queryParams });
      // if (params['tab'] === 'garage' && !params['query']) {
        this.garageService.getAllGarages().subscribe(
          (data) => {
            this.garages = data.data.content;
            this.isLoading = false;
          },
          (error) => {
            console.log({error});
            this.isLoading = false;
          }
        )
      // }
      if (params['tab'] === 'garage' && params['query']) {
        this.garageService.searchGarage(params['query']).subscribe(
          (data) => {
            console.log({data});
            this.garages = data.data;
          }
        )
      }
    });
  }
}
