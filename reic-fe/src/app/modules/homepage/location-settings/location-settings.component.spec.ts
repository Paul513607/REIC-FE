import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationSettingsComponent } from './location-settings.component';

describe('LocationSettingsComponent', () => {
  let component: LocationSettingsComponent;
  let fixture: ComponentFixture<LocationSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationSettingsComponent]
    });
    fixture = TestBed.createComponent(LocationSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
