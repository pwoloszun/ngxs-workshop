import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { map, Observable, of } from 'rxjs';

import { actions as featuredActions, FeaturedVideosState, VideoEntity } from '../../state/featured-videos';
import { actions as bgActiveActions, BgActiveVideoState, VideoStatus } from '../../state/bg-active-video';

@Component({
  selector: 'app-large-video-player',
  templateUrl: './large-video-player.component.html',
})
export class LargeVideoPlayerComponent implements OnInit, OnDestroy {

  // TODO
  videoTime$: Observable<number> = of(3 * 60_000 + 11_000);

  // TODO
  videoStatus$: Observable<VideoStatus> = of(VideoStatus.Paused);

  // TODO
  currentVideo$: Observable<VideoEntity | null> = of(null);

  isLoading$ = this.currentVideo$.pipe(
    map((v) => v === null)
  );

  @Input()
  set videoId(idStr: number | string | null) {
    if (idStr !== null) {
      const id = parseInt(idStr as string);
      // TODO: event
    }
  }

  private lastTimestamp = 0;

  constructor(private store: Store) { }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    // TODO: event
  }

  playingVideoHandler(timestamp: number) {
    this.lastTimestamp = timestamp;
  }

  playVideoHandler(timestamp: number) {
    // TODO: event
  }

  pauseVideoHandler(timestamp: number) {
    // TODO: event
  }

  stopVideoHandler() {
    // TODO: event
  }

}
