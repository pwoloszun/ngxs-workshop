import { VideoDto } from '@infrastructure/api/video-api.service';

// '[Source] Event';

// Sources:
// UI
// API
// Device

export class FetchVideosRequest {
  static readonly type = '[Featured Videos] Fetch Videos Request';
}

export class FetchVideosSuccess {
  static readonly type = '[Video API] Fetch Videos Success';

  constructor(public payload: { videos: VideoDto[]; }) { }
}

export class ChooseVideo {
  static readonly type = '[Featured Videos] Choose Video';

  constructor(public payload: { id: number; }) { }
}
