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
  // TODO: currentVideo selector
  // TODO: videosWithLink selector
  // TODO: isLoading selector

  // TODO listen to: actions.FetchVideosRequest
  fetchFeaturedVideosRequest(ctx: FeaturedVideosCtx, action: actions.FetchVideosRequest) {
    // TODO
  }

  // TODO listen to: actions.FetchVideosSuccess
  fetchFeaturedVideosSuccess(ctx: FeaturedVideosCtx, action: actions.FetchVideosSuccess) {
    // TODO
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


