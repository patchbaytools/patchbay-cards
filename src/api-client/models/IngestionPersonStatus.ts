/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Status of a person during ingestion with name details
 */
export type IngestionPersonStatus = {
    number: string;
    legal_name?: (string | null);
    performer_name?: (string | null);
    exists_in_db: boolean;
};

