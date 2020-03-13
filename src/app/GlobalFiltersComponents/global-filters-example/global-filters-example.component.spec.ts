import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalFiltersExampleComponent } from './global-filters-example.component';

describe('GlobalFiltersExampleComponent', () => {
  let component: GlobalFiltersExampleComponent;
  let fixture: ComponentFixture<GlobalFiltersExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalFiltersExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalFiltersExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
