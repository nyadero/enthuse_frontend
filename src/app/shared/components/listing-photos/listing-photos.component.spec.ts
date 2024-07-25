import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingPhotosComponent } from './listing-photos.component';

describe('ListingPhotosComponent', () => {
  let component: ListingPhotosComponent;
  let fixture: ComponentFixture<ListingPhotosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListingPhotosComponent]
    });
    fixture = TestBed.createComponent(ListingPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
