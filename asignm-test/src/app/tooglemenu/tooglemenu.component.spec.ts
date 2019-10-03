import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooglemenuComponent } from './tooglemenu.component';

describe('TooglemenuComponent', () => {
  let component: TooglemenuComponent;
  let fixture: ComponentFixture<TooglemenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooglemenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooglemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
