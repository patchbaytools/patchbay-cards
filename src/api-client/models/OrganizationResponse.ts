/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrganizationType } from './OrganizationType';
export type OrganizationResponse = {
    name: string;
    number: string;
    roles?: (Array<OrganizationType> | null);
    city?: (string | null);
    url_website?: (string | null);
    url_linkedin?: (string | null);
    verified?: boolean;
    email?: (string | null);
};

