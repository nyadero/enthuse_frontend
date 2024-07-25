import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCoverpicComponent } from './upload-coverpic.component';

describe('UploadCoverpicComponent', () => {
  let component: UploadCoverpicComponent;
  let fixture: ComponentFixture<UploadCoverpicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadCoverpicComponent]
    });
    fixture = TestBed.createComponent(UploadCoverpicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
