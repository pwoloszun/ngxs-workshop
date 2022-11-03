import { VideoEntity } from '../featured-videos';

export enum VideoStatus {
  Idle = 'Idle',
  Playing = 'Playing',
  Paused = 'Paused',
}

interface IVideoActivity {
  id: number;
  time: number;
  status: VideoStatus;
}

export type IVideActivitiesRecord = Record<number, IVideoActivity>;

export interface BgActiveVideoStateModel {
  activeVideoId: number | null;
  videoActivities: IVideActivitiesRecord;
}

export interface VideoWithTime extends VideoEntity {
  time: number;
}
