/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MasterArtistSummary } from './MasterArtistSummary';
import type { MasterStatus } from './MasterStatus';
import type { MasterTechnicalDetailsResponse } from './MasterTechnicalDetailsResponse';
import type { MasterType } from './MasterType';
import type { ParentalWarning } from './ParentalWarning';
export type MasterTrackResponse = {
    artists: Array<MasterArtistSummary>;
    file_link?: (string | null);
    number: string;
    name: string;
    version_subtitle?: (string | null);
    duration?: (number | null);
    master_type?: MasterType;
    isrc?: (string | null);
    status: MasterStatus;
    technical_details?: (MasterTechnicalDetailsResponse | null);
    file_key?: (string | null);
    parent_master_number?: (string | null);
    derivatives?: (Array<MasterTrackResponse> | null);
    display_filename?: (string | null);
    parental_warning?: (ParentalWarning | null);
    display_artist_name?: (string | null);
};

