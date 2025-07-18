/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Collaborator } from './Collaborator';
import type { MasterArtistRequest } from './MasterArtistRequest';
import type { MasterStatus } from './MasterStatus';
import type { MasterSubmissionState } from './MasterSubmissionState';
import type { MasterTechnicalDetailsRequest } from './MasterTechnicalDetailsRequest';
import type { MasterType } from './MasterType';
import type { ParentalWarning } from './ParentalWarning';
export type CreateMasterRequest = {
    name: string;
    version_subtitle?: (string | null);
    master_type?: MasterType;
    parent_master_number?: (string | null);
    spotify_id?: (string | null);
    deal_number?: (string | null);
    book_number?: (string | null);
    release_number?: (string | null);
    status: MasterStatus;
    isrc?: (string | null);
    link?: (string | null);
    collaborators?: Array<Collaborator>;
    artists?: Array<MasterArtistRequest>;
    song_number?: (string | null);
    technical_details?: (MasterTechnicalDetailsRequest | null);
    parental_warning?: (ParentalWarning | null);
    display_artist_name?: (string | null);
    submission_state?: MasterSubmissionState;
};

