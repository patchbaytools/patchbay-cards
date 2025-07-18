/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Currency } from './Currency';
import type { DealStatus } from './DealStatus';
import type { MasterCreditType } from './MasterCreditType';
import type { MasterDealType } from './MasterDealType';
import type { MasterRoyaltyType } from './MasterRoyaltyType';
export type Clearance = {
    person_number: string;
    person_name: string;
    track_number: string;
    track_index: number;
    master_number: string;
    master_name: string;
    deal_status: (DealStatus | null);
    deal_fee_amount: (number | null);
    deal_fee_currency: (Currency | null);
    master_deal_number?: (string | null);
    master_deal_type?: (MasterDealType | null);
    master_royalty_type: (MasterRoyaltyType | null);
    master_royalty: (number | null);
    master_credits: (Array<MasterCreditType> | null);
    song_number: (string | null);
    pub_split: (number | null);
};

