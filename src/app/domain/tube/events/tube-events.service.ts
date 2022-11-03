import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';

import { actions } from '../state/bg-active-video';

@Injectable({
  providedIn: 'root'
})
export class TubeEventsService {

  constructor(private store: Store) { }

  onFeaturedVideosExit(): void {
    // TODO: event
  }
}
