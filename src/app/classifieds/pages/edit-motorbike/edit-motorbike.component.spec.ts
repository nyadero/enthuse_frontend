import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMotorbikeComponent } from './edit-motorbike.component';

describe('EditMotorbikeComponent', () => {
  let component: EditMotorbikeComponent;
  let fixture: ComponentFixture<EditMotorbikeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditMotorbikeComponent]
    });
    fixture = TestBed.createComponent(EditMotorbikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
