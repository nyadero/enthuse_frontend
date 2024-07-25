import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingbyidComponent } from './listingbyid.component';

describe('ListingbyidComponent', () => {
  let component: ListingbyidComponent;
  let fixture: ComponentFixture<ListingbyidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListingbyidComponent]
    });
    fixture = TestBed.createComponent(ListingbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
