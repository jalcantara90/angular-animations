import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimateChildComponent } from './animate-child.component';

const routes: Routes = [
  { path: '', component: AnimateChildComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimateChildRoutingModule { }
