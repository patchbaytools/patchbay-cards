/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IngestionArtistStatus } from './IngestionArtistStatus';
import type { IngestionMasterAgreementStatus } from './IngestionMasterAgreementStatus';
import type { IngestionMasterStatus } from './IngestionMasterStatus';
import type { IngestionOrganizationStatus } from './IngestionOrganizationStatus';
import type { IngestionPersonStatus } from './IngestionPersonStatus';
/**
 * Metadata tracking what was created/ingested during deal processing
 */
export type DealIngestionMetadata = {
    artist?: (IngestionArtistStatus | null);
    person?: (IngestionPersonStatus | null);
    organization?: (IngestionOrganizationStatus | null);
    agreements?: Array<IngestionMasterAgreementStatus>;
    masters?: Array<IngestionMasterStatus>;
};

