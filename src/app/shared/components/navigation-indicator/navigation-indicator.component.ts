import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-navigation-indicator',
  templateUrl: './navigation-indicator.component.html',
  styleUrls: ['./navigation-indicator.component.css']
})
export class NavigationIndicatorComponent implements OnInit, OnDestroy {
  @Input() isNavigating$: Observable<boolean> | undefined;
  isNavigating: boolean = false;
  private subscription: Subscription | undefined;

  ngOnInit() {
    if (this.isNavigating$) {
      this.subscription = this.isNavigating$.subscribe((value) => {
        this.isNavigating = value;
        console.log(this.isNavigating);
        console.log('NavigationIndicatorComponent:', this.isNavigating);
      });
    }
  }

  ngOnDestroy() {
    // Unsubscribe to prevent memory leaks when the component is destroyed
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
