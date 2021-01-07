import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationHeaderComponent } from './animation-header.component';
import { SMButtonModule, SMIconsModule } from 'sysmian';

@NgModule({
  declarations: [AnimationHeaderComponent],
  imports: [
    CommonModule,
    SMIconsModule,
    SMButtonModule,
    RouterModule.forChild([])
  ],
  exports: [AnimationHeaderComponent]
})
export class AnimationHeaderModule { }
