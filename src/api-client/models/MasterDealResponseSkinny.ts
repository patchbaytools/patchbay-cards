/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type MasterDealResponseSkinny = {
    type: MasterDealResponseSkinny.type;
    number: string;
    person_number: string;
    person_name: string;
    artist_number: string;
    artist_name: string;
    book_number?: (string | null);
};
export namespace MasterDealResponseSkinny {
    export enum type {
        PRODUCER = 'Producer',
        MIXER = 'Mixer',
    }
}

