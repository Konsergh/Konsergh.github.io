import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequairComponent } from './requair.component';

describe('RequairComponent', () => {
  let component: RequairComponent;
  let fixture: ComponentFixture<RequairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
