import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalCounterModule } from '@domain/global-counter';
import { StatePatternsModule } from '@domain/state-patterns';

import { FundamentalsSectionRoutingModule } from './fundamentals-section-routing.module';
import { GlobalCounterPageComponent } from './pages/global-counter-page/global-counter-page.component';
import { LocalCounterPageComponent } from './pages/local-counter-page/local-counter-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { PatternsPageComponent } from './pages/patterns-page/patterns-page.component';

@NgModule({
  declarations: [
    DashboardPageComponent,
    GlobalCounterPageComponent,
    LocalCounterPageComponent,
    PatternsPageComponent,
  ],
  imports: [
    CommonModule,
    FundamentalsSectionRoutingModule,
    // domain
    GlobalCounterModule,
    StatePatternsModule,
  ]
})
export class FundamentalsSectionModule { }
