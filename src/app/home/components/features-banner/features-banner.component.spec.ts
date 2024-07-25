import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesBannerComponent } from './features-banner.component';

describe('FeaturesBannerComponent', () => {
  let component: FeaturesBannerComponent;
  let fixture: ComponentFixture<FeaturesBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturesBannerComponent]
    });
    fixture = TestBed.createComponent(FeaturesBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
