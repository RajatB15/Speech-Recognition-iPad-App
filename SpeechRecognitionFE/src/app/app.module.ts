import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignalRService}  from './services/signal-r.service';
import { SignalrWindow } from './services/signal-r-window.service';
import {CountdownTimerModule} from 'ngx-countdown-timer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, CountdownTimerModule.forRoot(), BrowserAnimationsModule
  ],
  providers: [
    SignalRService,{provide: SignalrWindow, useValue: window}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
