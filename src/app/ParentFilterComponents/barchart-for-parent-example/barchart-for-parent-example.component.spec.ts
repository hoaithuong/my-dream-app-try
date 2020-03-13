import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarchartForParentExampleComponent } from './barchart-for-parent-example.component';

describe('BarchartForParentExampleComponent', () => {
  let component: BarchartForParentExampleComponent;
  let fixture: ComponentFixture<BarchartForParentExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarchartForParentExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarchartForParentExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
