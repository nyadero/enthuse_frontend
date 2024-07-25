import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubMembersComponent } from './club-members.component';

describe('ClubMembersComponent', () => {
  let component: ClubMembersComponent;
  let fixture: ComponentFixture<ClubMembersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClubMembersComponent]
    });
    fixture = TestBed.createComponent(ClubMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
