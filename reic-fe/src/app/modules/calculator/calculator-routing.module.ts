import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MlCalculatorComponent } from './ml-calculator/ml-calculator.component';
import { FormulaCalculatorComponent } from './formula-calculator/formula-calculator.component';

const routes: Routes = [
  {
    path: '',
    component: MlCalculatorComponent,
  },
  {
    path: 'ml',
    component: MlCalculatorComponent,
  },
  {
    path: 'formula',
    component: FormulaCalculatorComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculatorRoutingModule { }