import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BusinessAdminInterface } from '../../interface/business-admin.interface';
import { BusinessService } from '../../service/business.service';
import { Role } from 'src/app/authentication/enum/roles.enum';
import { NotificationService } from 'src/app/shared/service/notification.service';

@Component({
  selector: 'app-business-administrator',
  templateUrl: './business-administrator.component.html',
  styleUrls: ['./business-administrator.component.css']
})
export class BusinessAdministratorComponent implements OnInit {

  @Input() manager!: BusinessAdminInterface;
  @Input() businessId!: string;
  @Output() emitRevokeEvent = new EventEmitter<string>();
  roles!: any;
  isManager!: boolean;

  constructor(
    private businessService: BusinessService,
     private notificationService: NotificationService
    ) {
    // this.isManager = this.manager.role === Role.MANAGER
  }

  ngOnInit(): void {
    this.isManager = this.manager.role == Role.MANAGER;
  }

  revoke(userId: string) {
    this.businessService.removeManager(userId).subscribe(
      (data) => {
         this.notificationService.showSnackbar(data.message, data.status);
         this.emitEvent(this.manager.id)
      },
      (error) => {

      }
    )
  }

  emitEvent(id: string){
    this.emitRevokeEvent.emit(id);
  }
}
