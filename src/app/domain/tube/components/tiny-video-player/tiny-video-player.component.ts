import { Component, OnInit, OnDestroy } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { map, Observable, of } from 'rxjs';

import { IPlayerOptions } from '@ui/video-player';

import {
  BgActiveVideoState,
  VideoStatus,
  VideoWithTime,
  actions
} from '../../state/bg-active-video';

const tinyPlayerOptions: IPlayerOptions = {
  showControls: false,
  showProgress: true,
  playerCssClass: `h-[78px] md:h-[160px]`,
};

@Component({
  selector: 'app-tiny-video-player',
  templateUrl: './tiny-video-player.component.html',
})
export class TinyVideoPlayerComponent implements OnInit, OnDestroy {

  //TODO
  activeVideo$: Observable<VideoWithTime | null> = of(null);

  //TODO
  activeVideoTime$: Observable<number> = of(2 * 60_000 + 7_000);

  //TODO
  activeVideoStatus$: Observable<VideoStatus> = of(VideoStatus.Paused);

  //TODO
  canPlay$: Observable<boolean> = of(false);

  //TODO
  canPause$: Observable<boolean> = of(false);

  isLoading$ = this.activeVideo$.pipe(
    map((v) => v === null)
  );

  get playerOptions(): IPlayerOptions {
    return tinyPlayerOptions;
  }

  private get activeVideoId(): number {
    return 1234; // TODO
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

  playVideoHandler() {
    // TODO: event
  }

  pauseVideoHandler() {
    // TODO: event
  }

}
