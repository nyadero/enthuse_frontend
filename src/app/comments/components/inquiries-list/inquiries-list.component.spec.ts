import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InquiriesListComponent } from './inquiries-list.component';

describe('InquiriesListComponent', () => {
  let component: InquiriesListComponent;
  let fixture: ComponentFixture<InquiriesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InquiriesListComponent]
    });
    fixture = TestBed.createComponent(InquiriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
