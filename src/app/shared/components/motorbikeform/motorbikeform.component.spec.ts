import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorbikeformComponent } from './motorbikeform.component';

describe('MotorbikeformComponent', () => {
  let component: MotorbikeformComponent;
  let fixture: ComponentFixture<MotorbikeformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MotorbikeformComponent]
    });
    fixture = TestBed.createComponent(MotorbikeformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
