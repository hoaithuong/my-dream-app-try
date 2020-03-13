import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfmBarchartComponent } from './afm-barchart.component';

describe('AfmBarchartComponent', () => {
  let component: AfmBarchartComponent;
  let fixture: ComponentFixture<AfmBarchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfmBarchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfmBarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
