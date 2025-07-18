/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MasterArtistRole } from './MasterArtistRole';
import type { MasterCreditType } from './MasterCreditType';
import type { MasterPerformanceRole } from './MasterPerformanceRole';
import type { PubDealResponseSkinny } from './PubDealResponseSkinny';
export type Collaborator = {
    name?: (string | null);
    performer_name?: (string | null);
    person_number?: (string | null);
    artist_number?: (string | null);
    credits?: Array<MasterCreditType>;
    instruments?: Array<string>;
    publishing_deal?: (PubDealResponseSkinny | null);
    master_agreement_number?: (string | null);
    composition_agreement_number?: (string | null);
    artist_type?: (MasterArtistRole | null);
    artist_performance_role?: (MasterPerformanceRole | null);
};

