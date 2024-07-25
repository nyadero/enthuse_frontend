import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessSearchbarComponent } from './business-searchbar.component';

describe('BusinessSearchbarComponent', () => {
  let component: BusinessSearchbarComponent;
  let fixture: ComponentFixture<BusinessSearchbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessSearchbarComponent]
    });
    fixture = TestBed.createComponent(BusinessSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
