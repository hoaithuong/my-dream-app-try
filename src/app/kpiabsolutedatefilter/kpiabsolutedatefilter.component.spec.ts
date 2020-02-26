import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiabsolutedatefilterComponent } from './kpiabsolutedatefilter.component';

describe('KpiabsolutedatefilterComponent', () => {
  let component: KpiabsolutedatefilterComponent;
  let fixture: ComponentFixture<KpiabsolutedatefilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiabsolutedatefilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiabsolutedatefilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
