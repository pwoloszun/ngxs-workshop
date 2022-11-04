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

  @Select(FeaturedVideosState.videos)
  featuredVideos$!: Observable<VideoWithTime[]>;

  @Select(FeaturedVideosState.isLoading)
  isLoading$!: Observable<boolean>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    const action = new actions.FetchVideosRequest();
    this.store.dispatch(action);
  }

  trackByVideoChange(index: number, video: VideoWithTime) {
    return video.id;
  }

}
