import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessBannerComponent } from './business-banner.component';

describe('BusinessBannerComponent', () => {
  let component: BusinessBannerComponent;
  let fixture: ComponentFixture<BusinessBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessBannerComponent]
    });
    fixture = TestBed.createComponent(BusinessBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
