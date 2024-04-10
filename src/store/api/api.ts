import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { OnThisDayArg, OnThisDayRes } from '../../type/onThisDay.ts';

export const SHORT_CACHE_TTL = 10;

export const baseQuery = fetchBaseQuery({
    baseUrl: 'https://api.wikimedia.org/',
    prepareHeaders: (headers) => {
        headers.set('accept', 'application/json');
        return headers;
    }
});

export const api = createApi({
    baseQuery,
    endpoints: (build) => ({
        onThisDay: build.mutation<OnThisDayRes, OnThisDayArg>({
            query: ({ language = 'en', type = 'births', mm, dd }) => ({
                url: `/feed/v1/wikipedia/${ language }/onthisday/${ type }/${ mm }/${ dd }`
            })
        })
    }),
    refetchOnMountOrArgChange: SHORT_CACHE_TTL
});

export const { useOnThisDayMutation } = api;
