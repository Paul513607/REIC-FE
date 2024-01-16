import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarParamModalComponent } from './solar-param-modal.component';

describe('ParamModalComponent', () => {
  let component: SolarParamModalComponent;
  let fixture: ComponentFixture<SolarParamModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolarParamModalComponent]
    });
    fixture = TestBed.createComponent(SolarParamModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
