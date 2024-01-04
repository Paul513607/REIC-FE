import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { CalculatorSettingsComponent } from './calculator-settings/calculator-settings.component';
import { MapComponent } from './map/map.component';
import { HomepageComponent } from './homepage/homepage.component';
import { GroupsComponent } from './groups/groups.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    HomepageComponent,
    CalculatorSettingsComponent,
    MapComponent,
    GroupsComponent,
  ],
  imports: [CommonModule, HomepageRoutingModule, GoogleMapsModule, MatButtonModule],
})
export class HomepageModule {}
