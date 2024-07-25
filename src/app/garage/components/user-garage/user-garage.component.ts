import { Component } from '@angular/core';
import { GarageService } from 'src/app/garage/service/garage.service';
import { GarageInterface } from 'src/app/garage/interface/garage-interface';
import { CustomHttpResponse } from 'src/app/shared/interface/httpResponse';
import { NotificationService } from 'src/app/shared/service/notification.service';

@Component({
  selector: 'app-user-garage',
  templateUrl: './user-garage.component.html',
  styleUrls: ['./user-garage.component.css']
})
export class UserGarageComponent {
   httpResponse!: CustomHttpResponse;
  garages: GarageInterface[] = [];
  isLoading: boolean= true;

  constructor(private garageService: GarageService, private notificationService: NotificationService){}

  ngOnInit(): void {
    console.log("inside garages");
    
    this.garageService.getUserGarages().subscribe(
      (data) => {
         this.httpResponse = data;
         console.log({data});
         this.garages = data.data;
         this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
      }
    )
  }

  deleteGarage(garageId: string){
     this.garageService.deleteGarage(garageId).subscribe(
      (data) => {
       this.garages = this.garages.filter(garage => garage.id != garageId)
       this.notificationService.showSnackbar(data.message, data.status)
      }
     )
  }
}
