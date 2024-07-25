import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorbikesComponent } from './motorbikes.component';

describe('MotorbikesComponent', () => {
  let component: MotorbikesComponent;
  let fixture: ComponentFixture<MotorbikesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MotorbikesComponent]
    });
    fixture = TestBed.createComponent(MotorbikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
