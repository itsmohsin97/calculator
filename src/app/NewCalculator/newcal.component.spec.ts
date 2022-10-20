import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Calculatordemo } from './newcal.component';

describe('Calculatordemo', () => {
  let component: Calculatordemo;
  let fixture: ComponentFixture<Calculatordemo>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Calculatordemo ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Calculatordemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
