import { Component, Input, OnInit } from '@angular/core';
import { BusinessService } from '../../service/business.service';
import { BusinessAdminInterface } from '../../interface/business-admin.interface';
import { CustomHttpResponse } from 'src/app/shared/interface/httpResponse';
import { UserInterface } from 'src/app/shared/interface/user';
import { FilterService } from 'src/app/shared/service/filter.service';
import { NotificationService } from 'src/app/shared/service/notification.service';


@Component({
  selector: 'app-business-managers',
  templateUrl: './business-managers.component.html',
  styleUrls: ['./business-managers.component.css']
})
export class BusinessManagersComponent implements OnInit {

  businessManagers: BusinessAdminInterface[] = [];
  users: UserInterface[] = [];
  @Input() businessId!: string;
  httpResponse!: CustomHttpResponse;

  constructor(
    private businessService: BusinessService,
     private notificationService: NotificationService,
      private filterService: FilterService
    ) { }

  ngOnInit(): void {
    this.businessService.getBusinessAdministrators(this.businessId).subscribe(
      (data) => {
        this.httpResponse = data;
        this.businessManagers = data.data;
      }
    )
  }


  updateFilter(key: string, value: any) {
    this.filterService.setFilters(key, value);

    // send request to fetch users
    this.businessService.searchUsers(this.filterService.getFilters()).subscribe(
      (data) => {
        this.users = data.data;
      }
    )
  }

  makeManager(userId: string) {
    this.businessService.addManager(this.businessId, userId).subscribe(
      (data) => {
        this.notificationService.showSnackbar(data.message, data.status);
        this.businessManagers.unshift(data.data);
      }
    )
  }

  getRevokeEvent(id: string) {
    this.businessManagers = this.businessManagers.filter(manager => manager.id != id);
  }

}
