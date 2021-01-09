import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KeyframesComponent } from './keyframes.component';

const routes: Routes = [
  { path: '', component: KeyframesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KeyframesRoutingModule { }
