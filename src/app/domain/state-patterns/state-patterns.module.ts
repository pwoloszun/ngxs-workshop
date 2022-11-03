import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';

import { CustomMaterialModule } from '@ui/custom-material';
import { LoadingIndicatorModule } from '@ui/loading-indicator';

import { StreamableActionsState } from './state/streamable-actions';
import { TodoListComponent } from './components/todo-list/todo-list.component';

const PUB_DECLARABLES = [
  TodoListComponent,
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
    // state
    NgxsModule.forFeature([
      StreamableActionsState
    ]),
    // ui
    CustomMaterialModule,
    LoadingIndicatorModule,
  ]
})
export class StatePatternsModule { }
