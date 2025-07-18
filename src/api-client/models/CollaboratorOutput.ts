/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompositionAgreementResponse } from './CompositionAgreementResponse';
import type { MasterArtistRole } from './MasterArtistRole';
import type { MasterCreditType } from './MasterCreditType';
import type { MasterPerformanceRole } from './MasterPerformanceRole';
import type { PersonRoleDescriptor } from './PersonRoleDescriptor';
import type { PubDealResponseSkinny } from './PubDealResponseSkinny';
import type { SongwriterIdentityResponse } from './SongwriterIdentityResponse';
export type CollaboratorOutput = {
    name?: (string | null);
    performer_name?: (string | null);
    person_number?: (string | null);
    artist_number?: (string | null);
    artist_type?: (MasterArtistRole | null);
    artist_performance_role?: (MasterPerformanceRole | null);
    roles?: Array<PersonRoleDescriptor>;
    credits?: Array<MasterCreditType>;
    instruments?: Array<string>;
    publishing_deal?: (PubDealResponseSkinny | null);
    master_agreement_number?: (string | null);
    composition_agreement_number?: (string | null);
    composition_agreement?: (CompositionAgreementResponse | null);
    songwriter_identity?: (SongwriterIdentityResponse | null);
    profile_image_url?: (string | null);
    legal_name?: (string | null);
};

