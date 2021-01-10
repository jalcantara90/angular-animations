import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-state-animation-with-params',
  templateUrl: './state-animation-with-params.component.html',
  styleUrls: ['./state-animation.component.scss'],
  animations: [
    trigger('stateChange', [
      state('animated, animated2', style({
        width: '{{width}}px',
        height: '{{height}}px',
        borderRadius: '{{borderRadius}}px',
        backgroundColor: '#{{backgroundColor}}',
      }),{
        params: {
          width: 300,
          height: 300,
          borderRadius: 30,
          backgroundColor: 'e83763'
        }
      }),
      transition('* <=> *', animate('400ms ease-in-out'))
    ]),
  ],
})
export class StateAnimationWithParamsComponent {
  animationState = {
    value: 'animated',
    params: {
      width: 300,
      height: 300,
      backgroundColor: 'e83763',
      borderRadius: 30
    }
  };

  constructor() {}

  animate(): void {
    this.animationState = {
      value: this.animationState.value === 'animated' ? 'animated2' : 'animated',
      params: {
        width: this.getRandomNumber(0, 600),
        height: this.getRandomNumber(0, 600),
        backgroundColor: this.getRandomHexadecimal(),
        borderRadius: this.getRandomNumber(0, 50)
      }
    };
  }

  private getRandomNumber(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  private getRandomHexadecimal(): string {
    return Math.floor(Math.random()*16777215).toString(16);
  }

}
