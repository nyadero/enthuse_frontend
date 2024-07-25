import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubPageComponent } from './club-page.component';

describe('ClubPageComponent', () => {
  let component: ClubPageComponent;
  let fixture: ComponentFixture<ClubPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClubPageComponent]
    });
    fixture = TestBed.createComponent(ClubPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
