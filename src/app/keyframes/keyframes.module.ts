import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SMCardModule, SMButtonModule } from 'sysmian';
import { KeyframesComponent } from './keyframes.component';
import { KeyframesRoutingModule } from './keyframes-routing.module';
import { AnimationHeaderModule } from './../animation-header/animation-header.module';

@NgModule({
  declarations: [KeyframesComponent],
  imports: [
    CommonModule,
    KeyframesRoutingModule,
    AnimationHeaderModule,
    SMCardModule,
    SMButtonModule
  ]
})
export class KeyframesModule { }
