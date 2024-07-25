import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionsBannerComponent } from './auctions-banner.component';

describe('AuctionsBannerComponent', () => {
  let component: AuctionsBannerComponent;
  let fixture: ComponentFixture<AuctionsBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuctionsBannerComponent]
    });
    fixture = TestBed.createComponent(AuctionsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
