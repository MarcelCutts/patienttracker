export interface User {
  staffName: string;
  stationId: string;
  facilityId: string;
}

export interface Patient {
  staffName: string;
  stationId: string;
  facilityId: string;
  id: string;
  comments: string;
  timeStarted: number;
  timeEnded?: number;
}

export type Store = {
  readonly patients: ReadonlyArray<Patient>;
  readonly user: User;
};
