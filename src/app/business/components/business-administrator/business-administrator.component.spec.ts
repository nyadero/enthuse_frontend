import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessAdministratorComponent } from './business-administrator.component';

describe('BusinessAdministratorComponent', () => {
  let component: BusinessAdministratorComponent;
  let fixture: ComponentFixture<BusinessAdministratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessAdministratorComponent]
    });
    fixture = TestBed.createComponent(BusinessAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
