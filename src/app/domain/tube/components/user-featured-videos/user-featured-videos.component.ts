import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';

import { actions, FeaturedVideosState } from '../../state/featured-videos';
import { BgActiveVideoState, VideoWithTime } from '../../state/bg-active-video';

@Component({
  selector: 'app-user-featured-videos',
  templateUrl: './user-featured-videos.component.html',
})
export class UserFeaturedVideosComponent implements OnInit {

  // TODO
  featuredVideos$: Observable<VideoWithTime[]> = of([]);

  // TODO
  isLoading$: Observable<boolean> = of(true);

  constructor(private store: Store) { }

  ngOnInit(): void {
    // TODO: event
  }

  trackByVideoChange(index: number, video: VideoWithTime) {
    return video.id;
  }

}
