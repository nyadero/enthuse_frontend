import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBusinessServiceComponent } from './new-business-service.component';

describe('NewBusinessServiceComponent', () => {
  let component: NewBusinessServiceComponent;
  let fixture: ComponentFixture<NewBusinessServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewBusinessServiceComponent]
    });
    fixture = TestBed.createComponent(NewBusinessServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
