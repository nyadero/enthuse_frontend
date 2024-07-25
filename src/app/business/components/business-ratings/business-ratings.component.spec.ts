import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessRatingsComponent } from './business-ratings.component';

describe('BusinessRatingsComponent', () => {
  let component: BusinessRatingsComponent;
  let fixture: ComponentFixture<BusinessRatingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessRatingsComponent]
    });
    fixture = TestBed.createComponent(BusinessRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
