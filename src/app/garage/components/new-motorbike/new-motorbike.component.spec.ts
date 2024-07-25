import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMotorbikeComponent } from './new-motorbike.component';

describe('NewMotorbikeComponent', () => {
  let component: NewMotorbikeComponent;
  let fixture: ComponentFixture<NewMotorbikeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewMotorbikeComponent]
    });
    fixture = TestBed.createComponent(NewMotorbikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
