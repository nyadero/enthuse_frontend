import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlikedGaragesComponent } from './userliked-garages.component';

describe('UserlikedGaragesComponent', () => {
  let component: UserlikedGaragesComponent;
  let fixture: ComponentFixture<UserlikedGaragesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserlikedGaragesComponent]
    });
    fixture = TestBed.createComponent(UserlikedGaragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
