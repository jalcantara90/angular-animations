import { routeAnimations } from './shared/animations/route.animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SMThemeService } from 'sysmian';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations],
})
export class AppComponent {
  constructor(private readonly themeService: SMThemeService) {}

  routing(routerOutlet: RouterOutlet) {
    return routerOutlet?.activatedRouteData?.animationState;
  }
}
