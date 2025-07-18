/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IPINameType } from './IPINameType';
import type { PROSummaryResponse } from './PROSummaryResponse';
export type SongwriterIdentityResponse = {
    person_number: (string | null);
    ipi_name_number?: (string | null);
    ipi_base_number?: (string | null);
    name: string;
    first_name?: (string | null);
    last_name?: (string | null);
    name_type?: (IPINameType | null);
    number: string;
    pro?: (PROSummaryResponse | null);
    verified: boolean;
    self_created?: boolean;
    preferred?: (boolean | null);
};

