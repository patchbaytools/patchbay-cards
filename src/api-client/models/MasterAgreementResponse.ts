/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AgreementStatus } from './AgreementStatus';
import type { Currency } from './Currency';
import type { MasterAgreementType } from './MasterAgreementType';
import type { MasterBonusResponse } from './MasterBonusResponse';
import type { MasterCreditType } from './MasterCreditType';
import type { MasterDealResponseSkinny } from './MasterDealResponseSkinny';
import type { MasterRoyaltyType } from './MasterRoyaltyType';
import type { SXLODStatus } from './SXLODStatus';
import type { ThresholdType } from './ThresholdType';
export type MasterAgreementResponse = {
    can_edit?: boolean;
    number: string;
    person_number: string;
    person_name: string;
    master_number: string;
    master_name: (string | null);
    master_version_subtitle: (string | null);
    deal_number: (string | null);
    deal: (MasterDealResponseSkinny | null);
    status: (AgreementStatus | null);
    effective_date: (string | null);
    upstream_threshold_type: (ThresholdType | null);
    upstream_threshold: (number | null);
    upstream_threshold_currency: (Currency | null);
    upstream_royalty: (number | null);
    upstream_royalty_type?: (MasterRoyaltyType | null);
    upstream_fee: (number | null);
    upstream_fee_currency: (Currency | null);
    fee: (number | null);
    master_royalty: (number | null);
    master_royalty_type: (MasterRoyaltyType | null);
    neighboring_rights_royalty: (number | null);
    sx_lod_status?: (SXLODStatus | null);
    sx_lod_file: (string | null);
    sx_percentage: (number | null);
    master_credits?: Array<MasterCreditType>;
    instruments?: Array<string>;
    start_date?: (string | null);
    type?: (MasterAgreementType | null);
    is_ingested?: boolean;
    bonus?: (MasterBonusResponse | null);
};

