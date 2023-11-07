import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => 
      import('./modules/homepage/homepage.module').then((m) => m.HomepageModule)
  }, 
  {
    path: 'home',
    loadChildren: () => 
      import('./modules/homepage/homepage.module').then((m) => m.HomepageModule)
    
  },
  {
    path: 'calculator',
    loadChildren: () =>
      import('./modules/calculator/calculator.module').then((m) => m.CalculatorModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
