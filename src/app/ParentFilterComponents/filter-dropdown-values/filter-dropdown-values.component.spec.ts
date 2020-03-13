import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterDropdownValuesComponent } from './filter-dropdown-values.component';

describe('FilterOfFilterComponent', () => {
  let component: FilterDropdownValuesComponent;
  let fixture: ComponentFixture<FilterDropdownValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterDropdownValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterDropdownValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
