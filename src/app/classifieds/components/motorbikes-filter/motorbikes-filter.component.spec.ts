import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorbikesFilterComponent } from './motorbikes-filter.component';

describe('MotorbikesFilterComponent', () => {
  let component: MotorbikesFilterComponent;
  let fixture: ComponentFixture<MotorbikesFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MotorbikesFilterComponent]
    });
    fixture = TestBed.createComponent(MotorbikesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
