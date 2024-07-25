import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-business-container',
  templateUrl: './business-container.component.html',
  styleUrls: ['./business-container.component.css']
})
export class BusinessContainerComponent {
  @Input() business: any
}
