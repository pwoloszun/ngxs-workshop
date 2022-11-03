import { VideoDto } from '@infrastructure/api/video-api.service';
import { WithLink } from '@infrastructure/app-urls';

export type VideoEntity = WithLink<VideoDto>;

export interface FeaturedVideosStateModel {
  isLoading: boolean;
  videos: VideoDto[];
  currentVideoId: number | null;
}
