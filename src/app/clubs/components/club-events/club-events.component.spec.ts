import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubEventsComponent } from './club-events.component';

describe('ClubEventsComponent', () => {
  let component: ClubEventsComponent;
  let fixture: ComponentFixture<ClubEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClubEventsComponent]
    });
    fixture = TestBed.createComponent(ClubEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
