/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SongSummaryResponse } from './SongSummaryResponse';
import type { StatisticsResponse } from './StatisticsResponse';
export type CatalogOverview = {
    statistics: StatisticsResponse;
    new_songs: Array<SongSummaryResponse>;
    last_enrichment_date: (string | null);
};

