import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantedComponent } from './quanted.component';

describe('QuantedComponent', () => {
  let component: QuantedComponent;
  let fixture: ComponentFixture<QuantedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuantedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
