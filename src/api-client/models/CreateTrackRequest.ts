/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MasterType } from './MasterType';
import type { ParentalAdvisory } from './ParentalAdvisory';
import type { TrackVersion } from './TrackVersion';
export type CreateTrackRequest = {
    release_number?: (string | null);
    master_number: string;
    index?: (number | null);
    type?: (MasterType | null);
    link?: (string | null);
    file?: (Blob | null);
    version?: (TrackVersion | null);
    has_lyrics?: boolean;
    language_code?: (string | null);
    parental_warning?: (ParentalAdvisory | null);
    audio_locale?: (string | null);
    available_separately?: boolean;
    recording_year?: (number | null);
    country_of_recording?: (string | null);
    country_of_commissioning?: (string | null);
    rights_holder_name?: (string | null);
    rights_ownership_name?: (string | null);
    rights_contract_begin_date?: (string | null);
    lyrics?: (string | null);
    master_file_key?: (string | null);
    instrumental_file_key?: (string | null);
    dolby_atmos_file_key?: (string | null);
};

