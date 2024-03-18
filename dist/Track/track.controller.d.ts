import { TrackService, iTrack } from './track.service';
export declare class TrackController {
    private readonly trackService;
    constructor(trackService: TrackService);
    getTracks(): iTrack[];
    getTrackById(id: number): iTrack;
    getTrackById2(params: any): iTrack;
    createTracks(): void;
    deleteTracks(): void;
}
