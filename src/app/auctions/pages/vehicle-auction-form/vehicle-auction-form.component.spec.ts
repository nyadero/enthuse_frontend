import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleAuctionFormComponent } from './vehicle-auction-form.component';

describe('VehicleAuctionFormComponent', () => {
  let component: VehicleAuctionFormComponent;
  let fixture: ComponentFixture<VehicleAuctionFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehicleAuctionFormComponent]
    });
    fixture = TestBed.createComponent(VehicleAuctionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
