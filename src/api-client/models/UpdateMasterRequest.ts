/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MasterStatus } from './MasterStatus';
import type { MasterSubmissionState } from './MasterSubmissionState';
import type { MasterTechnicalDetailsRequest } from './MasterTechnicalDetailsRequest';
import type { MasterType } from './MasterType';
import type { ParentalWarning } from './ParentalWarning';
export type UpdateMasterRequest = {
    number?: (string | null);
    name?: (string | null);
    version_subtitle?: (string | null);
    master_type?: (MasterType | null);
    parent_master_number?: (string | null);
    spotify_id?: (string | null);
    status?: (MasterStatus | null);
    isrc?: (string | null);
    link?: (string | null);
    record_deal_number?: (string | null);
    song_number?: (string | null);
    song_remove?: (boolean | null);
    promo_link?: (string | null);
    technical_details?: (MasterTechnicalDetailsRequest | null);
    parental_warning?: (ParentalWarning | null);
    file_key?: (string | null);
    file_key_delete?: (boolean | null);
    display_artist_name?: (string | null);
    submission_state?: (MasterSubmissionState | null);
    release_number?: (string | null);
};

