import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeElementsExampleComponent } from './attribute-elements-example.component';

describe('AttributeElementsExampleComponent', () => {
  let component: AttributeElementsExampleComponent;
  let fixture: ComponentFixture<AttributeElementsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributeElementsExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeElementsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
