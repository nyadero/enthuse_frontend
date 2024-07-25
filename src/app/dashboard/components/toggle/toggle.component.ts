import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MarketplaceService } from 'src/app/classifieds/service/marketplace.service';
import { NotificationService } from 'src/app/shared/service/notification.service';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent {
  @Input() listingId: string = "";
  @Input() isSold!: boolean;
  toggleValue: boolean = this.isSold;

constructor(private marketplaceService: MarketplaceService, private notificationService: NotificationService){}

toggleSwitch(event: any) {
  this.toggleValue = event.target.checked;
  console.log(this.toggleValue);
  const formData = {isSold: this.toggleValue}
  this.marketplaceService.markListingAsSold(this.listingId, formData).subscribe(
    (data) => {
       console.log({data});
       this.notificationService.showSnackbar(data.message, data.status);  
    },
    (error) => {
        this.notificationService.showSnackbar(error.message, "ERROR");  
        console.log(error);
        
    }
  )
}

// mark listing as sold or not


}
