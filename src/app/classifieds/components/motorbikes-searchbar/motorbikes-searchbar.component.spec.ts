import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorbikesSearchbarComponent } from './motorbikes-searchbar.component';

describe('MotorbikesSearchbarComponent', () => {
  let component: MotorbikesSearchbarComponent;
  let fixture: ComponentFixture<MotorbikesSearchbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MotorbikesSearchbarComponent]
    });
    fixture = TestBed.createComponent(MotorbikesSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
