import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import produce from 'immer';

import { IncrementGlobalCounter } from './global-counter.actions';

interface IGlobalCounterStateModel {
  value: number;
  updatedAt: number | null;
}

const name = `globalCounter`;
const defaults: IGlobalCounterStateModel = {
  value: 200,
  updatedAt: null,
};

@State<IGlobalCounterStateModel>({
  name,
  defaults,
})
@Injectable()
export class GlobalCounterState {

  @Selector()
  static counterValue(state: IGlobalCounterStateModel) {
    return state.value;
  }

  @Selector()
  static updatedAt(state: IGlobalCounterStateModel) {
    return state.updatedAt;
  }

  @Action(IncrementGlobalCounter)
  incrementFlow(ctx: StateContext<IGlobalCounterStateModel>, action: IncrementGlobalCounter) {
    const state = ctx.getState();
    const { incrementBy, timestamp } = action.payload;
    const nextState = produce(state, (draft) => {
      draft.value = state.value + incrementBy;
      draft.updatedAt = timestamp;
    });
    ctx.setState(nextState);

    // side effect
  }


}
