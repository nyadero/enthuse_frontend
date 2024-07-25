import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBusinessPagesComponent } from './my-business-pages.component';

describe('MyBusinessPagesComponent', () => {
  let component: MyBusinessPagesComponent;
  let fixture: ComponentFixture<MyBusinessPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyBusinessPagesComponent]
    });
    fixture = TestBed.createComponent(MyBusinessPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
