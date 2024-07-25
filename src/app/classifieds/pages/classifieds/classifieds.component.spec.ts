import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassifiedsComponent } from './classifieds.component';

describe('ClassifiedsComponent', () => {
  let component: ClassifiedsComponent;
  let fixture: ComponentFixture<ClassifiedsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassifiedsComponent]
    });
    fixture = TestBed.createComponent(ClassifiedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
