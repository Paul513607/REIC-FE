import { TestBed } from '@angular/core/testing';

import { SolarCalculatorService } from './solar-calculator.service';

describe('SolarCalculatorService', () => {
  let service: SolarCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolarCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
