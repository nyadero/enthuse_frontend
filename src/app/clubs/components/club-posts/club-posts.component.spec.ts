import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubPostsComponent } from './club-posts.component';

describe('ClubPostsComponent', () => {
  let component: ClubPostsComponent;
  let fixture: ComponentFixture<ClubPostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClubPostsComponent]
    });
    fixture = TestBed.createComponent(ClubPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
