import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupCervejariaComponent } from './signup-cervejaria.component';

describe('SignupCervejariaComponent', () => {
  let component: SignupCervejariaComponent;
  let fixture: ComponentFixture<SignupCervejariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupCervejariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupCervejariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
