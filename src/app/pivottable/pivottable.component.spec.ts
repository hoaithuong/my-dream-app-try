import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PivottableComponent } from './pivottable.component';

describe('PivottableComponent', () => {
  let component: PivottableComponent;
  let fixture: ComponentFixture<PivottableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PivottableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PivottableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
