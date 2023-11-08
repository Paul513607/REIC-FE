import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { CalculatorSettingsComponent } from './calculator-settings/calculator-settings.component';
import { LocationSettingsComponent } from './location-settings/location-settings.component';
import { MapComponent } from './map/map.component';
import { HomepageComponent } from './homepage/homepage.component';


@NgModule({
  declarations: [
    HomepageComponent,
    CalculatorSettingsComponent,
    LocationSettingsComponent,
    MapComponent,
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule
  ]
})
export class HomepageModule { }
