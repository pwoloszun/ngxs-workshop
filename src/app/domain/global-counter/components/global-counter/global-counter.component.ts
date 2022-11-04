import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { map, Observable, of } from 'rxjs';

import { actions, GlobalCounterState } from '../../state/global-counter';

@Component({
  selector: 'app-global-counter',
  templateUrl: './global-counter.component.html',
})
export class GlobalCounterComponent implements OnInit {

  @Select(GlobalCounterState.counterValue)
  counterValue$!: Observable<number>;

  @Select(GlobalCounterState.formattedUpdatedAt)
  formattedUpdatedAt$!: Observable<string>;

  constructor(private store: Store) { }

  incrementHandler() {
    const action = new actions.IncrementGlobalCounter({
      incrementBy: 2,
      timestamp: Date.now(),
    });

    this.store.dispatch(action);
  }

  ngOnInit(): void {
  }

}
