import { UserCardModule } from './../shared/user-card/user-card.module';
import { SMButtonModule, SMCardModule } from 'sysmian';
import { AnimationHeaderModule } from '../shared/animation-header/animation-header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueryAndStaggerRoutingModule } from './query-and-stagger-routing.module';
import { QueryAndStaggerComponent } from './query-and-stagger.component';


@NgModule({
  declarations: [QueryAndStaggerComponent],
  imports: [
    CommonModule,
    QueryAndStaggerRoutingModule,
    AnimationHeaderModule,
    SMButtonModule,
    SMCardModule,
    UserCardModule
  ]
})
export class QueryAndStaggerModule { }
