import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';

import { CustomMaterialModule } from '@ui/custom-material';
import { CustomPipesModule } from '@ui/custom-pipes';
import { LoadableListModule } from '@ui/loadable-list';
import { VideoPlayerModule } from '@ui/video-player';
import { LoadableContainerModule } from '@ui/loadable-container';

import { FeaturedVideosState } from './state/featured-videos';
import { BgActiveVideoState } from './state/bg-active-video';
import { UserPlaylistState } from './state/user-playlist';
import { UserFeaturedVideosComponent } from './components/user-featured-videos/user-featured-videos.component';
import { LargeVideoPlayerComponent } from './components/large-video-player/large-video-player.component';
import { MinatureVideoPanelComponent } from './components/minature-video-panel/minature-video-panel.component';
import { TinyVideoPlayerComponent } from './components/tiny-video-player/tiny-video-player.component';
import { FeaturedPosterComponent } from './components/featured-poster/featured-poster.component';
import { ExtendablePlaylistComponent } from './components/extendable-playlist/extendable-playlist.component';
import { CondensedPlaylistComponent } from './components/condensed-playlist/condensed-playlist.component';
import { ExtendablePlaylistItemComponent } from './components/extendable-playlist-item/extendable-playlist-item.component';

const PRIV_DECLARABLES = [
  TinyVideoPlayerComponent,
  FeaturedPosterComponent,
  ExtendablePlaylistItemComponent,
];

const PUB_DECLARABLES = [
  ExtendablePlaylistComponent,
  UserFeaturedVideosComponent,
  LargeVideoPlayerComponent,
  MinatureVideoPanelComponent,
  CondensedPlaylistComponent,
];

@NgModule({
  declarations: [
    ...PRIV_DECLARABLES,
    ...PUB_DECLARABLES,
  ],
  exports: [
    ...PUB_DECLARABLES,
  ],
  imports: [
    CommonModule,
    // routing
    RouterModule,
    // state
    NgxsModule.forFeature([
      FeaturedVideosState,
      BgActiveVideoState,
      UserPlaylistState
    ]),
    // ui
    CustomMaterialModule,
    CustomPipesModule,
    VideoPlayerModule,
    LoadableListModule,
    LoadableContainerModule,
  ],
})
export class TubeModule { }
