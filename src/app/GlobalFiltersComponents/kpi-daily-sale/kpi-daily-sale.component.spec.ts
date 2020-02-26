import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiDailySaleComponent } from './kpi-daily-sale.component';

describe('KpiDailySaleComponent', () => {
  let component: KpiDailySaleComponent;
  let fixture: ComponentFixture<KpiDailySaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiDailySaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiDailySaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
