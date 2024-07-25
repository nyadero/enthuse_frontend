import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BService } from '../../interface/business-service';
import { BusinessService } from '../../service/business.service';
import { NotificationService } from 'src/app/shared/service/notification.service';

@Component({
  selector: 'app-business-service',
  templateUrl: './business-service.component.html',
  styleUrls: ['./business-service.component.css']
})
export class BusinessServiceComponent {

  @Input() service!: BService;
  @Input() isManaging: boolean = false;
  @Input() businessId!: string;
  @Output() emitDeleteEvent = new EventEmitter<string>();

  constructor(
    private businessService: BusinessService,
     private notificationService: NotificationService
    ){}

  deleteService() {
    this.businessService.deleteBusinessService(this.businessId, this.service.id).subscribe(
      (data) => {
        this.notificationService.showSnackbar(data.message, data.status);
        if(data.status == "SUCSESS"){
          this.emitEvent(this.service.id);
        }
      }, 
      (error) => {

      }
    )
  }

  emitEvent(id: string){
    this.emitDeleteEvent.emit(id);
  }
}
