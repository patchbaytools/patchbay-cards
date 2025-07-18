/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ParentalAdvisory } from './ParentalAdvisory';
import type { TrackVersion } from './TrackVersion';
export type UpdateTrackRequest = {
    release_number?: (string | null);
    track_number?: (string | null);
    index?: (number | null);
    master_number?: (string | null);
    promo_link?: (string | null);
    has_lyrics?: (boolean | null);
    language_code?: (string | null);
    parental_warning?: (ParentalAdvisory | null);
    tiktok_clip_start?: (number | null);
    tiktok_clip_end?: (number | null);
    version?: (TrackVersion | null);
    master_file_link?: (string | null);
    instrumental_file_link?: (string | null);
    dolby_atmos_file_link?: (string | null);
    master_file_key?: (string | null);
    instrumental_file_key?: (string | null);
    dolby_atmos_file_key?: (string | null);
    lyrics?: (string | null);
    audio_locale?: (string | null);
};

