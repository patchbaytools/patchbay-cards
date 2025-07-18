/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IntegrationDeliveryStatus } from './IntegrationDeliveryStatus';
import type { IntegrationType } from './IntegrationType';
export type IntegrationDeliveryStatusResponse = {
    integration: IntegrationType;
    status: IntegrationDeliveryStatus;
    last_updated?: (string | null);
};

