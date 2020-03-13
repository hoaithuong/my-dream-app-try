import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarchartForParentComponent } from './barchart-for-parent.component';

describe('BarchartForParentComponent', () => {
  let component: BarchartForParentComponent;
  let fixture: ComponentFixture<BarchartForParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarchartForParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarchartForParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
