import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enter-exit',
  templateUrl: './enter-exit.component.html',
  styleUrls: ['./enter-exit.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(15px)' }),
        animate('500ms', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0, transform: 'translateY(15px)' })),
      ]),
    ])
  ]
})
export class EnterExitComponent implements OnInit {
  show = true;

  constructor() { }

  ngOnInit(): void {
  }

  showHide() {
    this.show = !this.show;
  }
}