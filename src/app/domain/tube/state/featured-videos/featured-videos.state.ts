import { Injectable } from '@angular/core';
import {
  State,
  Action,
  StateContext,
  Selector,
  Store
} from '@ngxs/store';
import produce from 'immer';

import { VideoApiService, VideoDto } from '@infrastructure/api/video-api.service';
import { getVideoUrl } from '@infrastructure/app-urls';

import * as actions from './featured-videos.actions';
import { FeaturedVideosStateModel, VideoEntity } from './featured-videos.types';
import { interval, tap, Subscription } from 'rxjs';

const defaults: FeaturedVideosStateModel = {
  isLoading: false,
  videos: [],
  currentVideoId: null,
};

type FeaturedVideosCtx = StateContext<FeaturedVideosStateModel>;

@State<FeaturedVideosStateModel>({
  name: 'tube',
  defaults
})
@Injectable()
export class FeaturedVideosState {

  // TODO: currentVideoId selector
  // TODO: videos selector
  @Selector()
  static videos(state: FeaturedVideosStateModel): VideoDto[] {
    return state.videos;
  }

  @Selector()
  static isLoading(state: FeaturedVideosStateModel): boolean {
    return state.isLoading;
  }
  // TODO: currentVideo selector
  // TODO: videosWithLink selector
  // TODO: isLoading selector

  private fetchVideosSub = new Subscription();

// `===== 14:47 =====`

  // TODO listen to: actions.FetchVideosRequest
  @Action(actions.FetchVideosRequest)
  fetchFeaturedVideosRequest(ctx: FeaturedVideosCtx) {
    const state = ctx.getState();
    const nextState = produce(state, (draft) => {
      draft.isLoading = true;
    });
    ctx.setState(nextState);

    // side effect
    this.fetchVideosSub.unsubscribe();
    this.fetchVideosSub = this.videoApi.getAll().pipe(
      tap((d) => console.log('RESP:', d))
    ).subscribe((videos) => {
      const action = new actions.FetchVideosSuccess({ videos });
      this.store.dispatch(action);
    });
  }

  @Action(actions.FetchVideosSuccess)
  fetchFeaturedVideosSuccess(ctx: FeaturedVideosCtx, action: actions.FetchVideosSuccess) {
    const { videos } = action.payload;
    const state = ctx.getState();
    const nextState = produce(state, (draft) => {
      draft.isLoading = false;
      draft.videos = videos;
    });
    ctx.setState(nextState);
  }

  // TODO listen to: actions.ChooseVideo
  chooseVideo(ctx: FeaturedVideosCtx, action: actions.ChooseVideo) {
    // TODO
  }

  constructor(
    private store: Store,
    private videoApi: VideoApiService
  ) { }

}
