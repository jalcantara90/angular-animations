import { SMButtonModule, SMCardModule } from 'sysmian';
import { UserCardModule } from './../shared/user-card/user-card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimateChildRoutingModule } from './animate-child-routing.module';
import { AnimationHeaderModule } from '../shared/animation-header/animation-header.module';

import { AnimateChildComponent } from './animate-child.component';

@NgModule({
  declarations: [AnimateChildComponent],
  imports: [
    CommonModule,
    AnimateChildRoutingModule,
    AnimationHeaderModule,
    UserCardModule,
    SMButtonModule,
    SMCardModule
  ]
})
export class AnimateChildModule { }
