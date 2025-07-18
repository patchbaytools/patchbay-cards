/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Currency } from './Currency';
import type { ThresholdType } from './ThresholdType';
export type CreateMasterBonusRequest = {
    agreement_number?: (string | null);
    threshold_type: ThresholdType;
    threshold_amount?: (number | null);
    threshold_currency?: (Currency | null);
    bonus_fee?: (number | null);
    bonus_currency?: (Currency | null);
    description?: (string | null);
    achieved?: boolean;
};

