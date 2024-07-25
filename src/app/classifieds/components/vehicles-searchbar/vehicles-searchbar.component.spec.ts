import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesSearchbarComponent } from './vehicles-searchbar.component';

describe('VehiclesSearchbarComponent', () => {
  let component: VehiclesSearchbarComponent;
  let fixture: ComponentFixture<VehiclesSearchbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehiclesSearchbarComponent]
    });
    fixture = TestBed.createComponent(VehiclesSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
