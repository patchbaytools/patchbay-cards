/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccessType } from './AccessType';
import type { ManagerRole } from './ManagerRole';
export type ManagerSummaryResponse = {
    name: string;
    number: string;
    user_number: string;
    user_email: string;
    role: ManagerRole;
    access: AccessType;
    profile_image_url?: (string | null);
};

