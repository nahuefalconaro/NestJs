export interface iTrack {
    id: number;
    title: string;
    duration: number;
    artist: string;
}
export declare const tracks: iTrack[];
export declare class TrackService {
    getTracks(): iTrack[];
    getTrackById(id: number): iTrack;
}
