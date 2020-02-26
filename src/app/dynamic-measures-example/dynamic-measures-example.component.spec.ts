import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicMeasuresExampleComponent } from './dynamic-measures-example.component';

describe('DynamicMeasuresExampleComponent', () => {
  let component: DynamicMeasuresExampleComponent;
  let fixture: ComponentFixture<DynamicMeasuresExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicMeasuresExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicMeasuresExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
