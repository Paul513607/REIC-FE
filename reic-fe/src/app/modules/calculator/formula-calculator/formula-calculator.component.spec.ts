import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaCalculatorComponent } from './formula-calculator.component';

describe('FormulaCalculatorComponent', () => {
  let component: FormulaCalculatorComponent;
  let fixture: ComponentFixture<FormulaCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormulaCalculatorComponent]
    });
    fixture = TestBed.createComponent(FormulaCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
