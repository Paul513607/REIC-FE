import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MlCalculatorComponent } from './ml-calculator/ml-calculator.component';
import { FormulaCalculatorComponent } from './formula-calculator/formula-calculator.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { CalculatorRoutingModule } from './calculator-routing.module';



@NgModule({
  declarations: [
    MlCalculatorComponent,
    FormulaCalculatorComponent,
    SidebarComponent,
    TopMenuComponent
  ],
  imports: [
    CommonModule,
    CalculatorRoutingModule,
  ]
})
export class CalculatorModule { }
