/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AgreementStatus } from './AgreementStatus';
import type { CreateMasterBonusRequest } from './CreateMasterBonusRequest';
import type { Currency } from './Currency';
import type { MasterAgreementType } from './MasterAgreementType';
import type { MasterCreditType } from './MasterCreditType';
import type { MasterRoyaltyType } from './MasterRoyaltyType';
import type { SXLODStatus } from './SXLODStatus';
export type CreateMasterAgreementRequest = {
    person_number: string;
    master_number: string;
    deal_number?: (string | null);
    master_name?: (string | null);
    master_version_subtitle?: (string | null);
    type?: (MasterAgreementType | null);
    master_credits?: Array<MasterCreditType>;
    instruments?: Array<string>;
    status?: (AgreementStatus | null);
    effective_date?: (string | null);
    upstream_royalty?: (number | null);
    upstream_royalty_type?: (MasterRoyaltyType | null);
    upstream_fee?: (number | null);
    upstream_fee_currency?: (Currency | null);
    fee?: (number | null);
    master_royalty?: (number | null);
    master_royalty_type?: (MasterRoyaltyType | null);
    neighboring_rights_royalty?: (number | null);
    sx_lod_status?: (SXLODStatus | null);
    sx_lod_file?: (string | null);
    sx_percentage?: (number | null);
    start_date?: (string | null);
    bonus?: (CreateMasterBonusRequest | null);
};

