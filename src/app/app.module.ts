import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SMButtonModule, SMCardModule, SMThemeModule } from 'sysmian';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StateAnimationModule } from './state-animation/state-animation.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SMThemeModule.forRoot({ theme: 'dark' }),
    SMCardModule,
    SMButtonModule,
    StateAnimationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
