import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiechartDailySalebyMenuItemComponent } from './piechart-daily-saleby-menu-item.component';

describe('PiechartDailySalebyMenuItemComponent', () => {
  let component: PiechartDailySalebyMenuItemComponent;
  let fixture: ComponentFixture<PiechartDailySalebyMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiechartDailySalebyMenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiechartDailySalebyMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
