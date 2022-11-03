import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector, Store } from '@ngxs/store';
import produce from 'immer';

import {
  FeaturedVideosState,
  VideoEntity,
  actions as featuredActions
} from '../featured-videos';
import * as actions from './bg-active-video.actions';
import {
  BgActiveVideoStateModel,
  IVideActivitiesRecord,
  VideoWithTime,
  VideoStatus
} from './bg-active-video.types';

type StateCtx = StateContext<BgActiveVideoStateModel>;

const defaults: BgActiveVideoStateModel = {
  activeVideoId: null,
  videoActivities: {},
};

@State<BgActiveVideoStateModel>({
  name: 'bgActiveVideo',
  defaults
})
@Injectable()
export class BgActiveVideoState {

  // TODO: videoActivities selector
  // TODO: activeVideoId selector
  // TODO: activeVideo selector
  // TODO: isAnyVideoActive selector
  // TODO: videosWithTime selector
  // TODO: calculateVideoTimeById selector
  // TODO: calculateVideoSatusById selector


  // TODO listen to some action(s)
  playVideo(ctx: StateCtx, action: any) {
    // TODO
    const { } = action.payload;
    const state = ctx.getState();
    const nextState = produce(state, (draft) => {
    });
    ctx.setState(nextState);
  }

  // TODO listen to some action(s)
  pauseVideo(ctx: StateCtx, action: any) {
    // TODO
    const { } = action.payload;
    const state = ctx.getState();
    const nextState = produce(state, (draft) => {
    });
    ctx.setState(nextState);
  }

  // TODO listen to some action(s)
  continueOnExitLargePlayer(ctx: StateCtx, action: any) {
    // TODO
    const { } = action.payload;
    const state = ctx.getState();
    const nextState = produce(state, (draft) => {
    });
    ctx.setState(nextState);
  }

  // TODO listen to some action(s)
  stopVideo(ctx: StateCtx, action: any) {
    // TODO
    const { } = action.payload;
    const state = ctx.getState();
    const nextState = produce(state, (draft) => {
    });
    ctx.setState(nextState);
  }

  // TODO listen to some action(s)
  pauseWhenOtherVideoChosen(ctx: StateCtx, action: any) {
    // TODO
    const { } = action.payload;
    const state = ctx.getState();
    const nextState = produce(state, (draft) => {
    });
    ctx.setState(nextState);
  }

  // TODO listen to some action(s)
  removeVideoActivities(ctx: StateCtx, action: any) {
    // TODO
    const { } = action.payload;
    const state = ctx.getState();
    const nextState = produce(state, (draft) => {
    });
    ctx.setState(nextState);
  }

  constructor(private store: Store) { }

}
