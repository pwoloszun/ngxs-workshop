import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { VideoWithTime } from '../../state/bg-active-video';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-extendable-playlist-item',
  templateUrl: './extendable-playlist-item.component.html'
})
export class ExtendablePlaylistItemComponent implements OnInit {

  @Input()
  video: VideoWithTime | null = null;

  @Input()
  isActive = false;

  get itemCss() {
    return { 'bg-slate-200': this.isActive };
  }

  constructor() { }

  ngOnInit(): void { }

}
