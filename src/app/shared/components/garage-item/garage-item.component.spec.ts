import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarageItemComponent } from './garage-item.component';

describe('GarageItemComponent', () => {
  let component: GarageItemComponent;
  let fixture: ComponentFixture<GarageItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GarageItemComponent]
    });
    fixture = TestBed.createComponent(GarageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
