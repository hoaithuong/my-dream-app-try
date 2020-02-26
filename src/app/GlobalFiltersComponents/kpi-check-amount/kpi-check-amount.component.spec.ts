import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiCheckAmountComponent } from './kpi-check-amount.component';

describe('KpiCheckAmountComponent', () => {
  let component: KpiCheckAmountComponent;
  let fixture: ComponentFixture<KpiCheckAmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiCheckAmountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiCheckAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
