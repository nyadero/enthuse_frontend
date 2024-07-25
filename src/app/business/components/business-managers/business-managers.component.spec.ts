import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessManagersComponent } from './business-managers.component';

describe('BusinessManagersComponent', () => {
  let component: BusinessManagersComponent;
  let fixture: ComponentFixture<BusinessManagersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessManagersComponent]
    });
    fixture = TestBed.createComponent(BusinessManagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
