import { Component, Input } from '@angular/core';
import {UserInterface} from "../../interface/user";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  @Input() user!: UserInterface;
  @Input() isListing: boolean = false;
}
