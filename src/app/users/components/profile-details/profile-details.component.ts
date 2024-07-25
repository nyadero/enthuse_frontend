import { Component, Input } from '@angular/core';
import { UserInterface } from 'src/app/shared/interface/user';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent {
  @Input() user!: UserInterface
}
