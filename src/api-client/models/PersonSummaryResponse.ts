/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PersonRoleDescriptor } from './PersonRoleDescriptor';
import type { SongwriterIdentityResponse } from './SongwriterIdentityResponse';
import type { UserSummaryResponse } from './UserSummaryResponse';
export type PersonSummaryResponse = {
    has_verified_book?: boolean;
    can_edit?: boolean;
    legal_name: (string | null);
    performer_name: (string | null);
    location?: (string | null);
    person_number: string;
    profile_image_url?: (string | null);
    default_pro_number?: (string | null);
    default_pro_name?: (string | null);
    roles?: (Array<PersonRoleDescriptor> | null);
    songwriter_identities?: (Array<SongwriterIdentityResponse> | null);
    user_identities?: (Array<UserSummaryResponse> | null);
};

