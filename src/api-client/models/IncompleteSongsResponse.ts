/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SongSummaryResponse } from './SongSummaryResponse';
export type IncompleteSongsResponse = {
    unregistered_songs: Array<SongSummaryResponse>;
    registered_incomplete_master_songs: Array<SongSummaryResponse>;
    songs_without_publishing_deals: Array<SongSummaryResponse>;
};

