import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentFilterExampleComponent } from './parent-filter-example.component';

describe('ParentFilterExampleComponent', () => {
  let component: ParentFilterExampleComponent;
  let fixture: ComponentFixture<ParentFilterExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentFilterExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentFilterExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
