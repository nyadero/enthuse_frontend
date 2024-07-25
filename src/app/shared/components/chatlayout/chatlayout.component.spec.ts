import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatlayoutComponent } from './chatlayout.component';

describe('ChatlayoutComponent', () => {
  let component: ChatlayoutComponent;
  let fixture: ComponentFixture<ChatlayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatlayoutComponent]
    });
    fixture = TestBed.createComponent(ChatlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
