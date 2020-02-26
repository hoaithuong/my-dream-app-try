import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlinesingleComponent } from './headlinesingle.component';

describe('HeadlinesingleComponent', () => {
  let component: HeadlinesingleComponent;
  let fixture: ComponentFixture<HeadlinesingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadlinesingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadlinesingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
