import { Component, Input } from '@angular/core';
import { Business } from '../../interface/business';

@Component({
  selector: 'app-business-details',
  templateUrl: './business-details.component.html',
  styleUrls: ['./business-details.component.css']
})
export class BusinessDetailsComponent {
   @Input() business!: Business;
}
