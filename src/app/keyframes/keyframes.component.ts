import { trigger, transition, style, animate, keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyframes',
  templateUrl: './keyframes.component.html',
  styleUrls: ['./keyframes.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-500px)' }),
        animate('500ms ease-out', keyframes([
          style({ opacity: 1, transform: 'translateY(220px)' }),
          style({ transform: 'translateY(-10px)' }),
          style({ transform: 'translateY(0px)' }),
        ])),
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'translateY(0px)' }),
        animate('500ms ease-in', keyframes([
          // style({ transform: 'translateY(20px)', offset: 0.2 }),
          style({ transform: 'translateY(-30px)', offset: 0.6 }),
          style({ opacity: 0, transform: 'translateY(500px)', offset: 1 }),
        ])),
      ]),
    ])
  ]
})
export class KeyframesComponent implements OnInit {
  show = true;

  constructor() { }

  ngOnInit(): void {
  }

  showHide() {
    this.show = !this.show;
  }
}
