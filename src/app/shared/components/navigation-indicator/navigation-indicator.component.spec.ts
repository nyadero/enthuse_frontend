import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationIndicatorComponent } from './navigation-indicator.component';

describe('NavigationIndicatorComponent', () => {
  let component: NavigationIndicatorComponent;
  let fixture: ComponentFixture<NavigationIndicatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationIndicatorComponent]
    });
    fixture = TestBed.createComponent(NavigationIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
