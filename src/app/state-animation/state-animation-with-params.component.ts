import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, useAnimation, animation } from '@angular/animations';

@Component({
  selector: 'app-state-animation-with-params',
  templateUrl: './state-animation-with-params.component.html',
  styleUrls: ['./state-animation.component.scss'],
  animations: [
    trigger('stateChange', [
      state(
        'animated',
        style({
          width: '{{width}}px',
          height: '{{height}}px',
          borderRadius: '{{borderRadius}}px',
          backgroundColor: '#{{backgroundColor}}',
        }),
        {
          params: {
            width: 300,
            height: 300,
            borderRadius: 30,
            backgroundColor: 'e83763'
          },
        }
      ),
      transition('* <=> *', [
        useAnimation(
          animation([
            animate('400ms ease-in-out'),
            style({
              width: '{{width}}px',
              height: '{{height}}px',
              borderRadius: '{{borderRadius}}px',
              backgroundColor: '#{{backgroundColor}}',
            })
          ]), {
          params: {
            width: 300,
            height: 300,
            borderRadius: 30,
            backgroundColor: 'e83763'
          }
        })
      ])
    ]),
  ],
})
export class StateAnimationWithParamsComponent {
  animationState = {
    value: 'void',
    params: {
      width: 300,
      height: 300,
      backgroundColor: this.getRandomHexadecimal(),
      borderRadius: 30
    }
  };

  constructor() {}

  animate(): void {
    this.animationState = {
      value: this.animationState.value === 'animated' ? 'other' : 'animated',
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
