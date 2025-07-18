/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DealStatus } from './DealStatus';
import type { SimpleRoyaltyDealType } from './SimpleRoyaltyDealType';
export type UpdateSimpleRoyaltyDealRequest = {
    number: string;
    counterparty_number?: (string | null);
    organization_number?: (string | null);
    type?: (SimpleRoyaltyDealType | null);
    active?: (boolean | null);
    status?: (DealStatus | null);
    execution_date?: (string | null);
    royalty_percentage?: (number | null);
    notes?: (string | null);
    priority?: (number | null);
    original_file_name?: (string | null);
    start_date?: (string | null);
};

