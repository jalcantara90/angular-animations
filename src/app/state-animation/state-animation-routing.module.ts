import { StateAnimationComponent } from './state-animation.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StateAnimationWithParamsComponent } from './state-animation-with-params.component';

const routes: Routes = [
  { path: '', component: StateAnimationComponent },
  { path: 'with-params', component: StateAnimationWithParamsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StateAnimationRoutingModule { }
