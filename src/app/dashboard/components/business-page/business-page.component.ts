import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Business } from 'src/app/business/interface/business';
import { BusinessService } from 'src/app/business/service/business.service';

@Component({
  selector: 'app-business-page',
  templateUrl: './business-page.component.html',
  styleUrls: ['./business-page.component.css']
})
export class BusinessPageComponent {
  constructor(private businessService: BusinessService){}

  @Input() business!: Business;
  @Output() deleteBusiness = new EventEmitter<string>();


  deletePage() {
    this.businessService.deleteBusinessPage(this.business.id).subscribe(
      (data) => {
        this.emitDeleteEvent(this.business.id);
      },
      (error) => {
        console.log(error);
        
      }
    )
  }


  emitDeleteEvent(businessId: string){
     this.deleteBusiness.emit(businessId);
  }

}
