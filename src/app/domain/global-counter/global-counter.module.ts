import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';

import { CustomMaterialModule } from '@ui/custom-material';

import { GlobalCounterComponent } from './components/global-counter/global-counter.component';
import { GlobalCounterState } from './state/global-counter';

const PUB_DECLARABLES = [
  GlobalCounterComponent,
];

@NgModule({
  declarations: [
    ...PUB_DECLARABLES,
  ],
  exports: [
    ...PUB_DECLARABLES,
  ],
  imports: [
    CommonModule,
    CustomMaterialModule,
    NgxsModule.forFeature([GlobalCounterState]),
  ],
})
export class GlobalCounterModule { }
