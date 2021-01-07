import { Component, Input } from '@angular/core';

@Component({
  selector: 'animation-header',
  templateUrl: './animation-header.component.html',
  styleUrls: ['./animation-header.component.scss']
})
export class AnimationHeaderComponent{
  @Input() title: string;

  constructor() { }
}
