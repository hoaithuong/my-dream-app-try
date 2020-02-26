import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpipositiveattributefilterComponent } from './kpipositiveattributefilter.component';

describe('KpipositiveattributefilterComponent', () => {
  let component: KpipositiveattributefilterComponent;
  let fixture: ComponentFixture<KpipositiveattributefilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpipositiveattributefilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpipositiveattributefilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
