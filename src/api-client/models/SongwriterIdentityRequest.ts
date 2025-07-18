/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IPINameType } from './IPINameType';
import type { PROAttachmentRequest } from './PROAttachmentRequest';
export type SongwriterIdentityRequest = {
    ipi_name_number: string;
    ipi_base_number?: (string | null);
    name: string;
    first_name?: (string | null);
    last_name?: (string | null);
    name_type: IPINameType;
    pro?: (PROAttachmentRequest | null);
    self_created?: boolean;
    preferred?: (boolean | null);
};

