/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CollaboratorOutput } from './CollaboratorOutput';
import type { MasterAgreementResponse } from './MasterAgreementResponse';
import type { MasterArtistSummary } from './MasterArtistSummary';
import type { MasterStatus } from './MasterStatus';
import type { MasterTechnicalDetailsResponse } from './MasterTechnicalDetailsResponse';
import type { MasterType } from './MasterType';
import type { ParentalWarning } from './ParentalWarning';
import type { RecordDealResponseSkinny } from './RecordDealResponseSkinny';
import type { ReleaseResponseSkinny } from './ReleaseResponseSkinny';
import type { SongSummary } from './SongSummary';
export type MasterDetailResponse = {
    can_edit?: boolean;
    number: string;
    name: string;
    version_subtitle?: (string | null);
    master_type?: MasterType;
    derivatives?: (Array<MasterDetailResponse> | null);
    parent_master_number?: (string | null);
    spotify_id?: (string | null);
    deal_number?: (string | null);
    deal?: (RecordDealResponseSkinny | null);
    releases?: (Array<ReleaseResponseSkinny> | null);
    book_number?: (string | null);
    isrc?: (string | null);
    link?: (string | null);
    status: MasterStatus;
    collaborators: Array<CollaboratorOutput>;
    artists: Array<MasterArtistSummary>;
    agreements: Array<MasterAgreementResponse>;
    song?: (SongSummary | null);
    technical_details?: (MasterTechnicalDetailsResponse | null);
    parental_warning?: (ParentalWarning | null);
    display_artist_name?: (string | null);
    file_key?: (string | null);
    file_link?: (string | null);
};

