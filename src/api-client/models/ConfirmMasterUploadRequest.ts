/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MasterTechnicalDetailsRequest } from './MasterTechnicalDetailsRequest';
import type { MasterType } from './MasterType';
export type ConfirmMasterUploadRequest = {
    parent_master_number?: (string | null);
    technical_details?: (MasterTechnicalDetailsRequest | null);
    file_link?: (string | null);
    file_key?: (string | null);
    master_type?: (MasterType | null);
};

