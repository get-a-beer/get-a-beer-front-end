import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaroseulComponent } from './caroseul.component';

describe('CaroseulComponent', () => {
  let component: CaroseulComponent;
  let fixture: ComponentFixture<CaroseulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaroseulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaroseulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
