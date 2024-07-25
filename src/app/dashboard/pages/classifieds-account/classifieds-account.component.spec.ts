import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassifiedsAccountComponent } from './classifieds-account.component';

describe('ClassifiedsAccountComponent', () => {
  let component: ClassifiedsAccountComponent;
  let fixture: ComponentFixture<ClassifiedsAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassifiedsAccountComponent]
    });
    fixture = TestBed.createComponent(ClassifiedsAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
