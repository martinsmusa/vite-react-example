import { http, HttpResponse } from 'msw';

import { OnThisDayArg } from '../type/onThisDay.ts';
import { birthsOnly } from './mockData.ts';

export const handlers = [
    http.get<OnThisDayArg>(
        'https://api.wikimedia.org/feed/v1/wikipedia/:language/onthisday/:type/:mm/:dd',
        ({ params, request }) => {
            // Mock 404 with a different language code
            if (params.language !== 'en') {
                return HttpResponse.json(
                    {
                        method: 'get',
                        title: 'Not found.',
                        type: 'https://mediawiki.org/wiki/HyperSwitch/errors/not_found#route',
                        uri: new URL(request.url).pathname
                    },
                    {
                        status: 404,
                        statusText: 'Internal server error'
                    }
                );
            }

            return HttpResponse.json(birthsOnly);
        }
    )
];
