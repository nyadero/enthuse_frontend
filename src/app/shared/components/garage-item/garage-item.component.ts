import { Component, Input, OnInit } from '@angular/core';
import { GarageInterface } from 'src/app/garage/interface/garage-interface';
import { LikesService } from 'src/app/likes/service/likes.service';
import { NotificationService } from '../../service/notification.service';

@Component({
  selector: 'app-garage-item',
  templateUrl: './garage-item.component.html',
  styleUrls: ['./garage-item.component.css']
})
export class GarageItemComponent implements OnInit{

  @Input() garage!: GarageInterface;
  likeCount!: number;


  constructor(
    private likesService: LikesService,
     private notificationService: NotificationService
    ){}

  ngOnInit(): void {
    this.likeCount = this.garage.likesCount;
  }

  likeGarage(garageId: string) {
    this.likesService.likeGarage(garageId).subscribe(
      (data) => {
        if (data.data.actionType == "Like") {
          this.likeCount++;
          console.log(this.likeCount);
          this.notificationService.showSnackbar(data.message, data.status);
        } else if (data.data.actionType == "Dislike"){
          this.likeCount--;
          this.notificationService.showSnackbar(data.message, data.status);
        }
      }, 
      (error) => {

      }
    )
  }

}
