import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-watch-video-page',
  templateUrl: './watch-video-page.component.html',
})
export class WatchVideoPageComponent implements OnInit {

  videoId$ = this.route.paramMap.pipe(
    map((paramMap) => {
      return paramMap.get('id') || null;
    })
  );

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void { }

}
