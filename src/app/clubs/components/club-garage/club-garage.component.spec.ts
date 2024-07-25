import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubGarageComponent } from './club-garage.component';

describe('ClubGarageComponent', () => {
  let component: ClubGarageComponent;
  let fixture: ComponentFixture<ClubGarageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClubGarageComponent]
    });
    fixture = TestBed.createComponent(ClubGarageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
