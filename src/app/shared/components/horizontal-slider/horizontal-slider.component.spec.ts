import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalSliderComponent } from './horizontal-slider.component';

describe('HorizontalSliderComponent', () => {
  let component: HorizontalSliderComponent;
  let fixture: ComponentFixture<HorizontalSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HorizontalSliderComponent]
    });
    fixture = TestBed.createComponent(HorizontalSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
