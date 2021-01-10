import { AnimationHeaderModule } from '../shared/animation-header/animation-header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SequenceAnimationsRoutingModule } from './sequence-animations-routing.module';
import { SequenceAnimationsComponent } from './sequence-animations.component';
import { SMButtonModule, SMCardModule } from 'sysmian';


@NgModule({
  declarations: [SequenceAnimationsComponent],
  imports: [
    CommonModule,
    SequenceAnimationsRoutingModule,
    AnimationHeaderModule,
    SMButtonModule,
    SMCardModule
  ]
})
export class SequenceAnimationsModule { }
