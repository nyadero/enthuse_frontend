import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherImagesComponent } from './other-images.component';

describe('OtherImagesComponent', () => {
  let component: OtherImagesComponent;
  let fixture: ComponentFixture<OtherImagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtherImagesComponent]
    });
    fixture = TestBed.createComponent(OtherImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
