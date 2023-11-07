import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageContentComponent } from './homepage-content/homepage-content.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageContentComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
