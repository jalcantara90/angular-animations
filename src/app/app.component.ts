import { Component } from '@angular/core';
import { SMThemeService } from 'sysmian';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private readonly themeService: SMThemeService) {}
}
