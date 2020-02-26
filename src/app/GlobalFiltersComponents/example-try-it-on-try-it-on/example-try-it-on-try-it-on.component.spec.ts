import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleTryItOnTryItOnComponent } from './example-try-it-on-try-it-on.component';

describe('ExampleTryItOnTryItOnComponent', () => {
  let component: ExampleTryItOnTryItOnComponent;
  let fixture: ComponentFixture<ExampleTryItOnTryItOnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleTryItOnTryItOnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleTryItOnTryItOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
