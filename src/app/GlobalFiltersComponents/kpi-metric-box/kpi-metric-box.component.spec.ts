import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiMetricBoxComponent } from './kpi-metric-box.component';

describe('KpiMetricBoxComponent', () => {
  let component: KpiMetricBoxComponent;
  let fixture: ComponentFixture<KpiMetricBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiMetricBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiMetricBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
