import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SociallayoutComponent } from './sociallayout.component';

describe('SociallayoutComponent', () => {
  let component: SociallayoutComponent;
  let fixture: ComponentFixture<SociallayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SociallayoutComponent]
    });
    fixture = TestBed.createComponent(SociallayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
