import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeroplaneformComponent } from './aeroplaneform.component';

describe('AeroplaneformComponent', () => {
  let component: AeroplaneformComponent;
  let fixture: ComponentFixture<AeroplaneformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AeroplaneformComponent]
    });
    fixture = TestBed.createComponent(AeroplaneformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
