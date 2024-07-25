import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorbikeAuctionFormComponent } from './motorbike-auction-form.component';

describe('MotorbikeAuctionFormComponent', () => {
  let component: MotorbikeAuctionFormComponent;
  let fixture: ComponentFixture<MotorbikeAuctionFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MotorbikeAuctionFormComponent]
    });
    fixture = TestBed.createComponent(MotorbikeAuctionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
