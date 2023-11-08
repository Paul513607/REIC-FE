import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => 
      import('./modules/login/login.module').then((m) => m.LoginModule)
  }, 
  {
    path: 'login',
    loadChildren: () => 
      import('./modules/login/login.module').then((m) => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./modules/register/register.module').then((m) => m.RegisterModule)
  },
  {
    path: 'homepage',
    loadChildren: () =>
      import('./modules/homepage/homepage.module').then((m) => m.HomepageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
