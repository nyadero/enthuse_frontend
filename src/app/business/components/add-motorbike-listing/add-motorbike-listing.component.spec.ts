import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMotorbikeListingComponent } from './add-motorbike-listing.component';

describe('AddMotorbikeListingComponent', () => {
  let component: AddMotorbikeListingComponent;
  let fixture: ComponentFixture<AddMotorbikeListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMotorbikeListingComponent]
    });
    fixture = TestBed.createComponent(AddMotorbikeListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
