import { Component, Input } from '@angular/core';
import { ClubInterface } from '../../interface/club.interface';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})
export class ClubComponent {
   @Input() club!: ClubInterface;
}
