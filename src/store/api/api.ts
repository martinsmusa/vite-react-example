import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {OnThisDayArg, OnThisDayRes} from "../../type/onThisDay.ts";

export const SHORT_CACHE_TTL = 10;

export const baseQuery = fetchBaseQuery({
    baseUrl: 'https://en.wikipedia.org/api/rest_v1/',
    prepareHeaders: (headers) => {
        headers.set('accept', 'application/json')
        return headers
    }
});

export const api = createApi({
    baseQuery,
    endpoints: (build) => ({
        onThisDay: build.mutation<OnThisDayRes, OnThisDayArg>({
            query: (queryArg) => ({
                url: `/feed/onthisday/${queryArg["type"]}/${queryArg.mm}/${queryArg.dd}`,
            }),
        }),
    }),
    refetchOnMountOrArgChange: SHORT_CACHE_TTL
});

export const {useOnThisDayMutation} = api;
