import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessInsightsComponent } from './business-insights.component';

describe('BusinessInsightsComponent', () => {
  let component: BusinessInsightsComponent;
  let fixture: ComponentFixture<BusinessInsightsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessInsightsComponent]
    });
    fixture = TestBed.createComponent(BusinessInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
