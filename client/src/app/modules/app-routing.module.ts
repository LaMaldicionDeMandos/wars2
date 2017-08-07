/**
 * Created by boot on 8/6/17.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroComponent} from '../components/intro.component';
import { DashboardComponent} from '../components/dashboard.component';

const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: ':code',  component: DashboardComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
