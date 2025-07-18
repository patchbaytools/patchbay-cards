/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AgreementStatus } from './AgreementStatus';
import type { CreateMasterBonusRequest } from './CreateMasterBonusRequest';
import type { Currency } from './Currency';
import type { MasterAgreementType } from './MasterAgreementType';
import type { MasterRoyaltyType } from './MasterRoyaltyType';
import type { SXLODStatus } from './SXLODStatus';
import type { ThresholdType } from './ThresholdType';
export type UpdateMasterAgreementRequest = {
    agreement_number?: (string | null);
    person_number?: (string | null);
    master_number?: (string | null);
    deal_number?: (string | null);
    deal_remove?: boolean;
    type?: (MasterAgreementType | null);
    status?: (AgreementStatus | null);
    effective_date?: (string | null);
    upstream_threshold_type?: (ThresholdType | null);
    upstream_threshold?: (number | null);
    upstream_threshold_currency?: (Currency | null);
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
    delete_bonus?: boolean;
};

