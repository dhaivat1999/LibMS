import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBook3Component } from './show-book3.component';

describe('ShowBook3Component', () => {
  let component: ShowBook3Component;
  let fixture: ComponentFixture<ShowBook3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowBook3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBook3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
