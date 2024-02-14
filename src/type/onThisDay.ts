export type OnThisDayRes = {
    births?: OnThisDay[]
    deaths?: OnThisDay[]
    events?: OnThisDay[]
    holidays?: OnThisDay[]
    selected?: OnThisDay[]
}

export type OnThisDayArg = {
    /**
     * @description Language code:
     * - For example: ar (Arabic), en (English), es (Spanish)
     * - List supported languages: https://api.wikimedia.org/wiki/Feed_API/Language_support#On_this_day_in_history
     */
    language: string
    /**
     * @description Type of event:
     * - all: Returns all types
     * - selected: Curated set of events that occurred on the given date
     * - births: Notable people born on the given date
     * - deaths: Notable people who died on the given date
     * - holidays: Fixed holidays celebrated on the given date
     * - events: Events that occurred on the given date that are not included in another type
     */
    type: 'all' | 'selected' | 'births' | 'deaths' | 'events' | 'holidays';
    /** @description Month events are requested for, 0-padded */
    mm: string
    /** @description Day of the month events are requested for, 0-padded */
    dd: string
};

export interface OnThisDay {
    /** @description Short description of the event */
    text?: string;
    /** @description Short description of the event */
    year?: string;
    /** @description List of pages related to the event, not used at the moment */
    pages?: unknown[];
}
