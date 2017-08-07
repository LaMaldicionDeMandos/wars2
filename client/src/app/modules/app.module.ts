import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule }   from './app-routing.module';

import { AppComponent } from '../components/app.component';
import { IntroComponent } from '../components/intro.component';
import { DashboardComponent } from '../components/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
