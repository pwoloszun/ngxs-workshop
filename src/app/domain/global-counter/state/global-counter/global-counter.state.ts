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

  @Selector([GlobalCounterState.updatedAt])
  static formattedUpdatedAt(
    state: IGlobalCounterStateModel,
    updatedAt: number | null
  ) {
    // const updatedAt = state.updatedAt;
    if (updatedAt === null) {
      return '';
    } else {
      return new Date(updatedAt).toISOString();
    }
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

  @Action(IncrementGlobalCounter)
  ggHhh(ctx: StateContext<IGlobalCounterStateModel>, action: IncrementGlobalCounter) {
    console.log('API CALL:',);

    // side effect
  }

  @Action(IncrementGlobalCounter)
  uuuIii(ctx: StateContext<IGlobalCounterStateModel>, action: IncrementGlobalCounter) {
    console.log('OTHER SIDE EFFCT OR next STATE calculation',);

    // side effect
  }

}
