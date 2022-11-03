import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, BehaviorSubject, combineLatest, map, of } from 'rxjs';

import { BgActiveVideoState, actions } from '../../state/bg-active-video';

@Component({
  selector: 'app-minature-video-panel',
  templateUrl: './minature-video-panel.component.html',
})
export class MinatureVideoPanelComponent implements OnInit {

  //TODO
  private isAnyVideoActive$: Observable<boolean> = of(true);

  private isOpen$ = new BehaviorSubject(true);

  isPanelVisible$ = combineLatest([
    this.isOpen$,
    this.isAnyVideoActive$
  ]).pipe(
    map(([isOpen, isAnyVideoActive]) => isOpen && isAnyVideoActive)
  );

  constructor(private store: Store) { }

  ngOnInit(): void { }

  closeHandler() {
    this.isOpen$.next(false);
  }

}
