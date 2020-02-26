import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpinegativeattributefilterComponent } from './kpinegativeattributefilter.component';

describe('KpinegativeattributefilterComponent', () => {
  let component: KpinegativeattributefilterComponent;
  let fixture: ComponentFixture<KpinegativeattributefilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpinegativeattributefilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpinegativeattributefilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
