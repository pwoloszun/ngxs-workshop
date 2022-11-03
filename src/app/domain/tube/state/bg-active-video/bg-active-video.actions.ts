interface IVideoParams {
  id: number;
}

interface IVideoTimeParams {
  id: number;
  timestamp: number;
}

export class PlayVideo {
  static readonly type = '[Video Player] Play Video';

  constructor(public payload: IVideoTimeParams) { }
}

export class PauseVideo {
  static readonly type = '[Video Player] Pause Video';

  constructor(public payload: IVideoTimeParams) { }
}

export class ExitLargePlayer {
  static readonly type = '[Large Player] Exit Large Player';

  constructor(public payload: IVideoTimeParams) { }
}

export class StopVideo {
  static readonly type = '[Video Player] Stop Video';
}

export class ExitFeaturedVideos {
  static readonly type = '[Featured Videos] Exit Featured Videos';
}

export class ExitTinyPlayer {
  static readonly type = '[Minature Video Panel] Exit Tiny Player';

  constructor(public payload: IVideoTimeParams) { }
}

export class EndVideo {
  static readonly type = '[Video Player] End Video';

  constructor(public payload: IVideoParams) { }
}
