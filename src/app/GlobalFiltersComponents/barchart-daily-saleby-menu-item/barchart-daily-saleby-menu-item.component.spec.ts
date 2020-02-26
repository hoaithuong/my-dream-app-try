import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarchartDailySalebyMenuItemComponent } from './barchart-daily-saleby-menu-item.component';

describe('BarchartDailySalebyMenuItemComponent', () => {
  let component: BarchartDailySalebyMenuItemComponent;
  let fixture: ComponentFixture<BarchartDailySalebyMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarchartDailySalebyMenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarchartDailySalebyMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
