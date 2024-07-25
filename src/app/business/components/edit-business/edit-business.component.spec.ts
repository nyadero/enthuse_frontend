import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBusinessComponent } from './edit-business.component';

describe('EditBusinessComponent', () => {
  let component: EditBusinessComponent;
  let fixture: ComponentFixture<EditBusinessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditBusinessComponent]
    });
    fixture = TestBed.createComponent(EditBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
