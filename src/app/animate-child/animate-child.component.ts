import { trigger, transition, animateChild, query, style, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-animate-child',
  templateUrl: './animate-child.component.html',
  animations: [
    trigger('container', [
      transition(':enter, :leave', [
        query('@*', animateChild(), { optional: true })
      ])
    ]),
    trigger('enterRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-100%)' }),
        animate('300ms ease-in', style({ opacity: 1, transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'translateX(0%)' }),
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateX(-100%)' }))
      ]),
    ]),
    trigger('enterLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(100%)' }),
        animate('300ms ease-in', style({ opacity: 1, transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'translateX(0%)' }),
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateX(100%)' }))
      ]),
    ])
  ]
})
export class AnimateChildComponent {
  user = new User();
  showContainer = true;

  constructor() { }

  showHideContainer() {
    this.showContainer = !this.showContainer;
  }
}
