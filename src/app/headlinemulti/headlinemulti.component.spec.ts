import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlinemultiComponent } from './headlinemulti.component';

describe('HeadlinemultiComponent', () => {
  let component: HeadlinemultiComponent;
  let fixture: ComponentFixture<HeadlinemultiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadlinemultiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadlinemultiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
