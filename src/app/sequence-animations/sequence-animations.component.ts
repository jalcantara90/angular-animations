import { trigger, transition, query, style, group, animate, sequence } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sequence-animations',
  templateUrl: './sequence-animations.component.html',
  styleUrls: ['./sequence-animations.component.scss'],
  animations: [
    trigger('fadeInGroup', [
      transition('* <=> *', [
        query('sm-card', [
          style({ opacity: 0, transform: 'scale(0.8)'  }),
          group([
            animate('500ms', style({ opacity: 1 })),
            animate('200ms ease-in', style({ transform: 'scale(1)' }))
          ])
        ])
      ])
    ]),
    trigger('fadeInSequence', [
      transition('* <=> *', [
        query('sm-card', [
          style({ opacity: 0, transform: 'scale(0)'  }),
          sequence([
            animate('500ms', style({ opacity: 1, transform: 'scale(0, .01)' })),
            animate('200ms', style({ transform: 'scale(1, .01)' })),
            animate('200ms', style({ transform: 'scale(1, 1)' }))
          ])
        ])
      ])
    ]),
  ]
})
export class SequenceAnimationsComponent {
  sequencesGroup = true;
  sequences = true;

  constructor() { }

  sequencesChange() {
    this.sequences = !this.sequences;
  }

  sequencesGroupChange() {
    this.sequencesGroup = !this.sequencesGroup;
  }
}
