import { Component } from '@angular/core';

@Component({
  selector: 'app-sociallayout',
  templateUrl: './sociallayout.component.html',
  styleUrls: ['./sociallayout.component.css']
})
export class SociallayoutComponent {
  showSidebar!: boolean;

  getToggleState(toggleState: boolean) {
    console.log({toggleState});
    this.showSidebar = toggleState;
    console.log({showSidebar: this.showSidebar});
  }

}
