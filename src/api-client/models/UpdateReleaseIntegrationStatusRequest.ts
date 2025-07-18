/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IntegrationDeliveryStatus } from './IntegrationDeliveryStatus';
import type { IntegrationType } from './IntegrationType';
export type UpdateReleaseIntegrationStatusRequest = {
    release_number: string;
    integration: IntegrationType;
    status: IntegrationDeliveryStatus;
};

