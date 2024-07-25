import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalscrollComponent } from './horizontalscroll.component';

describe('HorizontalscrollComponent', () => {
  let component: HorizontalscrollComponent;
  let fixture: ComponentFixture<HorizontalscrollComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HorizontalscrollComponent]
    });
    fixture = TestBed.createComponent(HorizontalscrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
