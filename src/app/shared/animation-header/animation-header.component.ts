import { ROUTE_ANIMATIONS_INTRO_BOTTOM } from '../animations/route.animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'animation-header',
  templateUrl: './animation-header.component.html',
  styleUrls: ['./animation-header.component.scss']
})
export class AnimationHeaderComponent{
  @Input() title: string;
  routeAnimationsElements = ROUTE_ANIMATIONS_INTRO_BOTTOM;

  constructor() { }
}
