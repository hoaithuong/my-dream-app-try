import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TryWithSelectComponent } from './try-with-select.component';

describe('TryWithSelectComponent', () => {
  let component: TryWithSelectComponent;
  let fixture: ComponentFixture<TryWithSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TryWithSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TryWithSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
