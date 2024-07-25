import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesFilterComponent } from './vehicles-filter.component';

describe('VehiclesFilterComponent', () => {
  let component: VehiclesFilterComponent;
  let fixture: ComponentFixture<VehiclesFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehiclesFilterComponent]
    });
    fixture = TestBed.createComponent(VehiclesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
