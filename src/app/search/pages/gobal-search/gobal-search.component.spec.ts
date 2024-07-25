import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GobalSearchComponent } from './gobal-search.component';

describe('GobalSearchComponent', () => {
  let component: GobalSearchComponent;
  let fixture: ComponentFixture<GobalSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GobalSearchComponent]
    });
    fixture = TestBed.createComponent(GobalSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
