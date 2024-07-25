import { Component, Input, OnInit } from '@angular/core';
import { GarageInterface } from 'src/app/garage/interface/garage-interface';
import { GarageService } from 'src/app/garage/service/garage.service';
import { CustomHttpResponse } from 'src/app/shared/interface/httpResponse';

@Component({
  selector: 'app-user-garage',
  templateUrl: './user-garage.component.html',
  styleUrls: ['./user-garage.component.css']
})
export class UserGarageComponent implements OnInit {
  httpResponse!: CustomHttpResponse;
  garages: GarageInterface[] = [];
  @Input() userId!: string;
  isLoading:boolean = true;

  constructor(private garageService: GarageService) { }

  ngOnInit(): void {
    console.log("inside garages");

    this.garageService.garagesByUserId(this.userId).subscribe(
      (data) => {
        this.httpResponse = data;
        console.log({ data });
        this.garages = data.data;
        this.isLoading = false;
      }
    )
  }

}
