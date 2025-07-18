/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CollaboratorOutput } from './CollaboratorOutput';
import type { MasterAgreementResponse } from './MasterAgreementResponse';
import type { MasterCreditType } from './MasterCreditType';
import type { MasterStatus } from './MasterStatus';
import type { ParentalWarning } from './ParentalWarning';
import type { RecordDealResponseSkinny } from './RecordDealResponseSkinny';
import type { ReleaseResponseSkinny } from './ReleaseResponseSkinny';
import type { SongSummary } from './SongSummary';
import type { SXLODStatus } from './SXLODStatus';
export type MasterSummaryResponse = {
    can_edit?: boolean;
    name: string;
    version_subtitle?: (string | null);
    number: string;
    book_number?: (string | null);
    book_credits?: (Array<MasterCreditType> | null);
    record_deal?: (RecordDealResponseSkinny | null);
    releases?: (Array<ReleaseResponseSkinny> | null);
    song?: (SongSummary | null);
    spotify_id?: (string | null);
    isrc?: (string | null);
    status: MasterStatus;
    parental_warning?: (ParentalWarning | null);
    collaborators: Array<CollaboratorOutput>;
    agreement_sx_lod_status?: (SXLODStatus | null);
    agreements?: (Array<MasterAgreementResponse> | null);
    file_link?: (string | null);
};

