import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';

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
    AppRoutingModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
