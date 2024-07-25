import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BicycleformComponent } from './bicycleform.component';

describe('BicycleformComponent', () => {
  let component: BicycleformComponent;
  let fixture: ComponentFixture<BicycleformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BicycleformComponent]
    });
    fixture = TestBed.createComponent(BicycleformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
