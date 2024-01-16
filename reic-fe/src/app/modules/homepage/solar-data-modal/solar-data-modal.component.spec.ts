import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarDataModalComponent } from './solar-data-modal.component';

describe('SolarDataModalComponent', () => {
  let component: SolarDataModalComponent;
  let fixture: ComponentFixture<SolarDataModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolarDataModalComponent]
    });
    fixture = TestBed.createComponent(SolarDataModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
