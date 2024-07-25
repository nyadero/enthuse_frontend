import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparePartsComponent } from './spare-parts.component';

describe('SparePartsComponent', () => {
  let component: SparePartsComponent;
  let fixture: ComponentFixture<SparePartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SparePartsComponent]
    });
    fixture = TestBed.createComponent(SparePartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
