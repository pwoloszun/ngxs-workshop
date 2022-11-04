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

  @Action(IncrementGlobalCounter)
  increment(ctx: StateContext<IGlobalCounterStateModel>, action: IncrementGlobalCounter) {
    const state = ctx.getState();
    const { incrementBy } = action.payload;
    const nextState = produce(state, (draft) => {
      draft.value = state.value + incrementBy;
    });
    ctx.setState(nextState);

    // side effect
  }

}
