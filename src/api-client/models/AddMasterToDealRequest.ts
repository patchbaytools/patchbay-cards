/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MasterCreditType } from './MasterCreditType';
export type AddMasterToDealRequest = {
    credits?: Array<MasterCreditType>;
    instruments?: Array<string>;
    deal_number?: (string | null);
    master_number: string;
};

