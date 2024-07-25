import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-error-indicator',
  templateUrl: './loading-error-indicator.component.html',
  styleUrls: ['./loading-error-indicator.component.css']
})
export class LoadingErrorIndicatorComponent {
   @Input() loading!: boolean 
   @Input() error!: string
   @Input() data: any[] = [];
}
