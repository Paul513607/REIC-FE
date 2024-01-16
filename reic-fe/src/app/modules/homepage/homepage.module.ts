import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { CalculatorSettingsComponent } from './calculator-settings/calculator-settings.component';
import { MapComponent } from './map/map.component';
import { HomepageComponent } from './homepage/homepage.component';
import { GroupsComponent } from './groups/groups.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatButtonModule } from '@angular/material/button';
import { SolarParamModalComponent } from './solar-param-modal/solar-param-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { SolarDataModalComponent } from './solar-data-modal/solar-data-modal.component';

@NgModule({
  declarations: [
    HomepageComponent,
    CalculatorSettingsComponent,
    MapComponent,
    GroupsComponent,
    SolarParamModalComponent,
    SolarDataModalComponent,
  ],
  imports: [
    CommonModule, 
    HomepageRoutingModule, 
    GoogleMapsModule, 
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
  ],
})
export class HomepageModule {}
