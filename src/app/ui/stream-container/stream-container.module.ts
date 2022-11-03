import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetModule } from '@rx-angular/template/let';

import { StreamContainerComponent } from './stream-container.component';
import { LoadingIndicatorModule } from '../loading-indicator/loading-indicator.module';
import { AlertPanelModule } from '../alert-panel/alert-panel.module';

@NgModule({
  declarations: [
    StreamContainerComponent
  ],
  exports: [
    StreamContainerComponent
  ],
  imports: [
    CommonModule,
    LetModule,
    // ui
    LoadingIndicatorModule,
    AlertPanelModule,
  ]
})
export class StreamContainerModule { }
