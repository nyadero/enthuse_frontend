import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoamComponent } from './roam.component';

describe('RoamComponent', () => {
  let component: RoamComponent;
  let fixture: ComponentFixture<RoamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoamComponent]
    });
    fixture = TestBed.createComponent(RoamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
