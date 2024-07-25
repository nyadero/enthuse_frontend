import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InquiryInputComponent } from './inquiry-input.component';

describe('InquiryInputComponent', () => {
  let component: InquiryInputComponent;
  let fixture: ComponentFixture<InquiryInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InquiryInputComponent]
    });
    fixture = TestBed.createComponent(InquiryInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
