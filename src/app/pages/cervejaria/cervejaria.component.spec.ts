import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CervejariaComponent } from './cervejaria.component';

describe('CervejariaComponent', () => {
  let component: CervejariaComponent;
  let fixture: ComponentFixture<CervejariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CervejariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CervejariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
