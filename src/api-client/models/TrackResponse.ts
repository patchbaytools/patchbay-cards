/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CollaboratorOutput } from './CollaboratorOutput';
import type { MasterTrackResponse } from './MasterTrackResponse';
import type { ParentalAdvisory } from './ParentalAdvisory';
export type TrackResponse = {
    master: MasterTrackResponse;
    number: string;
    index: number;
    has_lyrics: (boolean | null);
    language_code: (string | null);
    parental_warning: (ParentalAdvisory | null);
    tiktok_clip_start: (number | null);
    tiktok_clip_end: (number | null);
    collaborators: Array<CollaboratorOutput>;
    preview_start?: number;
    preview_length?: number;
    preview_release_date_time?: (string | null);
    preview_release_date_time_zone?: (string | null);
    audio_locale?: (string | null);
    available_separately?: boolean;
    recording_year?: (number | null);
    country_of_recording?: (string | null);
    country_of_commissioning?: (string | null);
    rights_holder_name?: (string | null);
    rights_ownership_name?: (string | null);
    rights_contract_begin_date?: (string | null);
    lyrics?: (string | null);
    disc_number?: (number | null);
};

