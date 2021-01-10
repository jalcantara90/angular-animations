import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './user-card.component';
import { SMCardModule } from 'sysmian';



@NgModule({
  declarations: [UserCardComponent],
  imports: [
    CommonModule,
    SMCardModule
  ],
  exports: [UserCardComponent]
})
export class UserCardModule { }
