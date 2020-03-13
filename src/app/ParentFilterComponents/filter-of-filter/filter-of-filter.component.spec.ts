import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterOfFilterComponent } from './filter-of-filter.component';

describe('FilterOfFilterComponent', () => {
  let component: FilterOfFilterComponent;
  let fixture: ComponentFixture<FilterOfFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterOfFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterOfFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
