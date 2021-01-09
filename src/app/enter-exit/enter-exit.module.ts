import { AnimationHeaderModule } from './../animation-header/animation-header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnterExitRoutingModule } from './enter-exit-routing.module';
import { EnterExitComponent } from './enter-exit.component';
import { SMButtonModule, SMCardModule } from 'sysmian';


@NgModule({
  declarations: [EnterExitComponent],
  imports: [
    CommonModule,
    EnterExitRoutingModule,
    AnimationHeaderModule,
    SMCardModule,
    SMButtonModule
  ]
})
export class EnterExitModule { }
