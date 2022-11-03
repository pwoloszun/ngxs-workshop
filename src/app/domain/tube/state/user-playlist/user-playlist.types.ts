import type { UserPlaylistDto } from '@infrastructure/api/user-playlist-api.service';

export type PlaylistEntity = UserPlaylistDto;

export interface UserPlaylistStateModel {
  isLoading: boolean;
  playlist: PlaylistEntity | null;
}
