import { Component, Input } from '@angular/core';
import { Business } from 'src/app/business/interface/business';

@Component({
  selector: 'app-business-info',
  templateUrl: './business-info.component.html',
  styleUrls: ['./business-info.component.css']
})
export class BusinessInfoComponent {
  @Input() business!:Business;
  @Input() isListing: boolean = false;
}
