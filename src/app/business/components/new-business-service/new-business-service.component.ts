import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BusinessService } from '../../service/business.service';
import { Validators } from 'ngx-editor';
import { BService } from '../../interface/business-service';
import { NotificationService } from 'src/app/shared/service/notification.service';

@Component({
  selector: 'app-new-business-service',
  templateUrl: './new-business-service.component.html',
  styleUrls: ['./new-business-service.component.css']
})
export class NewBusinessServiceComponent implements OnInit {

  bServiceForm!: FormGroup;
  @Input() businessId!: string;
  @Output() emitNewService = new EventEmitter<BService>();

  constructor(
    private formBuilder: FormBuilder,
     private businessService: BusinessService,
      private notificationService: NotificationService
    ) { }

  ngOnInit(): void {
    this.bServiceForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      priceRange: ['', [Validators.required]]
    })
  }


  addService() {
    this.businessService.addBusinessService(this.businessId, this.bServiceForm.value).subscribe(
      (data) => {
         this.notificationService.showSnackbar(data.message, data.status)
         this.outPutService(data.data);
         this.bServiceForm.reset();
      },
      (error) => {

      }
    )
    }

    outPutService(service: BService){
      this.emitNewService.emit(service);
    }

}
