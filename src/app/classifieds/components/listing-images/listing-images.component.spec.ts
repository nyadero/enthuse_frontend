import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingImagesComponent } from './listing-images.component';

describe('ListingImagesComponent', () => {
  let component: ListingImagesComponent;
  let fixture: ComponentFixture<ListingImagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListingImagesComponent]
    });
    fixture = TestBed.createComponent(ListingImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
