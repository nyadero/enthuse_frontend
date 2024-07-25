import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingCommentsComponent } from './listing-comments.component';

describe('ListingCommentsComponent', () => {
  let component: ListingCommentsComponent;
  let fixture: ComponentFixture<ListingCommentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListingCommentsComponent]
    });
    fixture = TestBed.createComponent(ListingCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
