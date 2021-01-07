import { AnimationHeaderModule } from './../animation-header/animation-header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateAnimationRoutingModule } from './state-animation-routing.module';
import { StateAnimationComponent } from './state-animation.component';
import { SMButtonModule, SMIconsModule } from 'sysmian';
import { StateAnimationWithParamsComponent } from './state-animation-with-params.component';

@NgModule({
  declarations: [StateAnimationComponent, StateAnimationWithParamsComponent],
  imports: [
    CommonModule,
    StateAnimationRoutingModule,
    SMIconsModule,
    SMButtonModule,
    AnimationHeaderModule
  ]
})
export class StateAnimationModule { }
