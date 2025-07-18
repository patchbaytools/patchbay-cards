/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReleaseValidationSection } from './ReleaseValidationSection';
export type ReleaseValidationResponse = {
    is_valid: boolean;
    missing_fields: Array<ReleaseValidationSection>;
    total_missing_fields: number;
};

