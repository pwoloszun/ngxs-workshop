import { UserPlaylistDto } from '@infrastructure/api/user-playlist-api.service';

interface IFetchRequestParams {
  userId: number;
}

export class UserPlaylistFetchRequest {
  static readonly type = '[User Playlist] Fetch Playlist Request';

  constructor(public payload: IFetchRequestParams) { }
}

interface IFetchSuccessParams {
  playlist: UserPlaylistDto;
}

export class UserPlaylistFetchSuccess {
  static readonly type = '[User Playlist] Fetch Playlist Success';

  constructor(public payload: IFetchSuccessParams) { }
}
