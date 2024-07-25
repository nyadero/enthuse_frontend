import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatformComponent } from './boatform.component';

describe('BoatformComponent', () => {
  let component: BoatformComponent;
  let fixture: ComponentFixture<BoatformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoatformComponent]
    });
    fixture = TestBed.createComponent(BoatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
