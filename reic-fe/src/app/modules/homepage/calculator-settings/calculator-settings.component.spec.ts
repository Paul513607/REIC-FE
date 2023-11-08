import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorSettingsComponent } from './calculator-settings.component';

describe('CalculatorSettingsComponent', () => {
  let component: CalculatorSettingsComponent;
  let fixture: ComponentFixture<CalculatorSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorSettingsComponent]
    });
    fixture = TestBed.createComponent(CalculatorSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
