import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessClassifiedsComponent } from './business-classifieds.component';

describe('BusinessClassifiedsComponent', () => {
  let component: BusinessClassifiedsComponent;
  let fixture: ComponentFixture<BusinessClassifiedsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessClassifiedsComponent]
    });
    fixture = TestBed.createComponent(BusinessClassifiedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
