import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveChartComponent } from './responsive-chart.component';

describe('ResponsiveChartComponent', () => {
  let component: ResponsiveChartComponent;
  let fixture: ComponentFixture<ResponsiveChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsiveChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
