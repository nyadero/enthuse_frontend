import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGarageComponent } from './user-garage.component';

describe('UserGarageComponent', () => {
  let component: UserGarageComponent;
  let fixture: ComponentFixture<UserGarageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserGarageComponent]
    });
    fixture = TestBed.createComponent(UserGarageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
