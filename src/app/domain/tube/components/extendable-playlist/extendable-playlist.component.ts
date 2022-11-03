import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';

import { CurrentUserService } from '@infrastructure/auth/current-user.service';

import { BgActiveVideoState, VideoWithTime } from '../../state/bg-active-video';
import { actions, UserPlaylistState } from '../../state/user-playlist';

@Component({
  selector: 'app-extendable-playlist',
  templateUrl: './extendable-playlist.component.html',
})
export class ExtendablePlaylistComponent implements OnInit {

  // TODO
  isLoading$: Observable<boolean> = of(true);

  // TODO
  playlistVideos$: Observable<VideoWithTime[]> = of([]);

  get activeVideoId() {
    return 1234; // TODO
  }

  panelOpenState = false;

  constructor(
    private store: Store,
    private currentUserService: CurrentUserService
  ) { }

  ngOnInit(): void { }

  openPanelHandler() {
    this.panelOpenState = true;
    this.fetchPlaylist();
  }

  closePanelHandler() {
    this.panelOpenState = false;
  }

  trackByVideoChange(index: number, video: VideoWithTime) {
    return video.id;
  }

  private fetchPlaylist() {
    // TODO: event
  }

}
