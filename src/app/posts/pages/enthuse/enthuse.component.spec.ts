import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnthuseComponent } from './enthuse.component';

describe('EnthuseComponent', () => {
  let component: EnthuseComponent;
  let fixture: ComponentFixture<EnthuseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnthuseComponent]
    });
    fixture = TestBed.createComponent(EnthuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
