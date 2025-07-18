/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeliveryJobStatus } from './DeliveryJobStatus';
import type { IntegrationType } from './IntegrationType';
export type DeliveryJobStatusFullResponse = {
    status: DeliveryJobStatus;
    error_message?: (string | null);
    completed_at?: (string | null);
    integration: IntegrationType;
    created_by: string;
};

