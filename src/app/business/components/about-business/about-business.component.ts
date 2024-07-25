import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-business',
  templateUrl: './about-business.component.html',
  styleUrls: ['./about-business.component.css']
})
export class AboutBusinessComponent {
  @Input() business: any;
}
