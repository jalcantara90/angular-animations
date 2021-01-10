import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'state-animation', loadChildren: () => import('./state-animation/state-animation.module').then(m => m.StateAnimationModule), data: { animationState: 'StateAnimation' }},
  { path: 'enter-exit', loadChildren: () => import('./enter-exit/enter-exit.module').then(m => m.EnterExitModule), data: { animationState: 'EnterExit' } },
  { path: 'keyframes', loadChildren: () => import('./keyframes/keyframes.module').then(m => m.KeyframesModule), data: { animationState: 'Keyframes' } },
  { path: 'sequences', loadChildren: () => import('./sequence-animations/sequence-animations.module').then(m => m.SequenceAnimationsModule), data: { animationState: 'Sequences' } },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
