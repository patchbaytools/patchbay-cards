/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IPINameType } from './IPINameType';
import type { PROAttachmentRequest } from './PROAttachmentRequest';
export type UpdateSongwriterIdentityRequest = {
    person_number?: (string | null);
    ipi_name_number?: (string | null);
    ipi_base_number?: (string | null);
    name?: (string | null);
    first_name?: (string | null);
    last_name?: (string | null);
    name_type?: (IPINameType | null);
    pro?: (PROAttachmentRequest | null);
    preferred?: (boolean | null);
};

