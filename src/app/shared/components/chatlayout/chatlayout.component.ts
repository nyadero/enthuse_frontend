import { Component } from '@angular/core';

@Component({
  selector: 'app-chatlayout',
  templateUrl: './chatlayout.component.html',
  styleUrls: ['./chatlayout.component.css']
})
export class ChatlayoutComponent {

   showSidebar!: boolean;

  getToggleState(toggleState: boolean) {
    console.log({toggleState});
    this.showSidebar = toggleState;
    console.log({showSidebar: this.showSidebar});
  }
}
