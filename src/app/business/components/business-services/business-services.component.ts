import { Component, Input, OnInit } from '@angular/core';
import { BService } from '../../interface/business-service';

@Component({
  selector: 'app-business-services',
  templateUrl: './business-services.component.html',
  styleUrls: ['./business-services.component.css']
})
export class BusinessServicesComponent implements OnInit {

  @Input() businessServices: BService[] = [];
  @Input() businessId!: string;

  constructor() { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getNewService(service: BService) {
    this.businessServices.unshift(service);
  }

  getDeleteEvent(id: string) {
    this.businessServices = this.businessServices.filter(service => service.id != id);
  }

}
