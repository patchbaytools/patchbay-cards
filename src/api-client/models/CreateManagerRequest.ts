/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccessType } from './AccessType';
import type { ManagerRole } from './ManagerRole';
export type CreateManagerRequest = {
    book_number?: (string | null);
    user_number?: (string | null);
    user_email?: (string | null);
    access_type: AccessType;
    role?: (ManagerRole | null);
};

