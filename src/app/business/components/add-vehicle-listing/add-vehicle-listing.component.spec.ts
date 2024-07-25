import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVehicleListingComponent } from './add-vehicle-listing.component';

describe('AddVehicleListingComponent', () => {
  let component: AddVehicleListingComponent;
  let fixture: ComponentFixture<AddVehicleListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddVehicleListingComponent]
    });
    fixture = TestBed.createComponent(AddVehicleListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
