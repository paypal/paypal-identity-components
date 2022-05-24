/* @flow */

import { getClientID, getCorrelationID, getSessionID, getEnv, getDebug, getSDKMeta, getLocale } from '@paypal/sdk-client/src';
import { create, CONTEXT, type ZoidComponent } from '@krakenjs/zoid/src';


export const Visitor = create({
    tag: 'paypal-experience',

    url: () => 'https://localhost.paypal.com:8443/smart/visitor',

    props: {
        email: {
            type:       'string',
            queryParam: true,
            required:   false
        },

        onDataFound: {
            type:     'function',
            required: false
        },

        sdkMeta: {
            type:        'string',
            queryParam:  true,
            sendToChild: true,
            value:       getSDKMeta
        },

        locale: {
            type:       'object',
            queryParam: true,
            value:      getLocale
        },

        clientID: {
            type:       'string',
            queryParam:  true,
            value:      getClientID
        },

        sessionID: {
            type:       'string',
            value:      getSessionID,
            queryParam: true
        },

        env: {
            type:       'string',
            queryParam: true,
            value:      getEnv
        },

        debug: {
            type:       'boolean',
            queryParam: true,
            value:      getDebug,
        },
    }
});