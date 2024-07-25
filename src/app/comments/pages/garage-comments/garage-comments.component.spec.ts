import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarageCommentsComponent } from './garage-comments.component';

describe('GarageCommentsComponent', () => {
  let component: GarageCommentsComponent;
  let fixture: ComponentFixture<GarageCommentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GarageCommentsComponent]
    });
    fixture = TestBed.createComponent(GarageCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
