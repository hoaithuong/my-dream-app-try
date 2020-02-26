import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrillEmployeeKpiChartComponent } from './drill-employee-kpi-chart.component';

describe('DrillEmployeeKpiChartComponent', () => {
  let component: DrillEmployeeKpiChartComponent;
  let fixture: ComponentFixture<DrillEmployeeKpiChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrillEmployeeKpiChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrillEmployeeKpiChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
