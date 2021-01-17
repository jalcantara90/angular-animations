import { state, trigger, style, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-state-animation',
  templateUrl: './state-animation.component.html',
  styleUrls: ['./state-animation.component.scss'],
  animations: [
    trigger('stateChange', [
      state(
        'base',
        style({
          transform: 'rotate(0deg)',
          width: '200px',
          height: '200px'
        })
      ),
      state('rotated', style({ transform: 'rotate(115deg)'})),
      state('stretched', style({ height: '400px' })),
      state('wided', style({ width: '350px' })),
      transition('* => *', animate('400ms ease-in-out'))
    ])
  ]
})
export class StateAnimationComponent {
  animationState: 'base' | 'rotated' | 'stretched' | 'wided' = 'base';

  constructor() { }

  rotate() {
    this.animationState = 'rotated';
  }

  stretch() {
    this.animationState = 'stretched';
  }

  widen() {
    this.animationState = 'wided';
  }

  reset() {
    this.animationState = 'base';
  }
}
