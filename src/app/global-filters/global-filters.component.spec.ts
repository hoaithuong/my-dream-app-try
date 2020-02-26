import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalFiltersComponent } from './global-filters.component';

describe('GlobalFiltersComponent', () => {
  let component: GlobalFiltersComponent;
  let fixture: ComponentFixture<GlobalFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
