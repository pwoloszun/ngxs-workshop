import { Injectable } from '@angular/core';
import {
  State,
  StateContext,
  Selector,
  Action,
} from '@ngxs/store';
import produce from 'immer';

import {
  UserPlaylistApiService,
  UserPlaylistDto
} from '@infrastructure/api/user-playlist-api.service';

import { VideoWithTime, BgActiveVideoState } from '../bg-active-video';
import * as actions from './user-playlist.actions';
import { UserPlaylistStateModel, PlaylistEntity } from './user-playlist.types';

const defaults: UserPlaylistStateModel = {
  isLoading: false,
  playlist: null,
};

type StateCtx = StateContext<UserPlaylistStateModel>;

@State<UserPlaylistStateModel>({
  name: 'userPlaylist',
  defaults
})
@Injectable()
export class UserPlaylistState {

  // TODO: isLoading selector
  // TODO: playlist selector
  // TODO: playlistVideoIds selector
  // TODO: playlistVideos selector



  // TODO listen to some action(s)
  fetchPlaylistRequest(ctx: StateCtx, action: any) {
    // TODO
    const { } = action.payload;
    const state = ctx.getState();
    const nextState = produce(state, (draft) => {
    });
    ctx.setState(nextState);
  }

  // TODO listen to some action(s)
  fetchPlaylistSuccess(ctx: StateCtx, action: any) {
    // TODO
    const { } = action.payload;
    const state = ctx.getState();
    const nextState = produce(state, (draft) => {
    });
    ctx.setState(nextState);
  }

  constructor(
    private userPlaylistApiService: UserPlaylistApiService
  ) { }

}
