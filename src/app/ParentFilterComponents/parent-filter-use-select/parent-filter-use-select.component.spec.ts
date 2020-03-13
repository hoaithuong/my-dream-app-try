import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentFilterUseSelectComponent } from './parent-filter-use-select.component';

describe('ParentFilterUseSelectComponent', () => {
  let component: ParentFilterUseSelectComponent;
  let fixture: ComponentFixture<ParentFilterUseSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentFilterUseSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentFilterUseSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
