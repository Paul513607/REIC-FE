import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlCalculatorComponent } from './ml-calculator.component';

describe('MlCalculatorComponent', () => {
  let component: MlCalculatorComponent;
  let fixture: ComponentFixture<MlCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MlCalculatorComponent]
    });
    fixture = TestBed.createComponent(MlCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
