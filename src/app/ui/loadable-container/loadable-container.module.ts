import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertPanelModule } from '@ui/alert-panel';
import { LoadingIndicatorModule } from '@ui/loading-indicator';
import { StreamContainerModule } from '@ui/stream-container';

import { LoadableContainerComponent } from './loadable-container.component';

@NgModule({
  declarations: [
    LoadableContainerComponent,
  ],
  exports: [
    LoadableContainerComponent,
  ],
  imports: [
    CommonModule,
    // ui
    AlertPanelModule,
    LoadingIndicatorModule,
    StreamContainerModule,
  ]
})
export class LoadableContainerModule { }
