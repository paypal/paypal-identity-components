/* @flow */
import { FUNDING } from '@paypal/sdk-constants';

import { BUTTON_LABEL, BUTTON_COLOR, BUTTON_SHAPE } from '../../src/constants';

const SUPPORTED_FUNDING_SOURCES : $ReadOnlyArray<$Values<typeof FUNDING>> = [
    FUNDING.PAYPAL,
    FUNDING.CREDIT
];

const RESPONSIVE_WIDTHS = [ 144, 222, 465, 670 ];

type ButtonConfig = {|
    only? : boolean,
    filename? : string,
    userAgent? : string,
    container? : {
        width : number
    },
    button? : {
        fundingSource? : $Values<typeof FUNDING>,
        locale? : string,
        style? : {
            color? : string,
            shape? : string,
            label? : string
        }
    }
|};

export const buttonConfigs : Array<ButtonConfig> = [];

const DEFAULT_OAUTH_PROPS = {
    scopes:          [ 'email' ],
    responseType:   'code',
    billingOptions: {
        type:        'MERCHANT',
        productCode:    'PRODUCT_CODE',
        cancelUrl:   'www.paypal.com'
    }
};

for (const fundingSource of SUPPORTED_FUNDING_SOURCES) {
    buttonConfigs.push({
        button: {
            fundingSource,
            ...DEFAULT_OAUTH_PROPS
        }
    });
}

for (const label of [ BUTTON_LABEL.CONNECT ]) {
    buttonConfigs.push({
        button: {
            style: {
                label
            },
            ...DEFAULT_OAUTH_PROPS
        }
    });
}

for (const width of RESPONSIVE_WIDTHS) {
    buttonConfigs.push({
        container: {
            width
        },
        button: {
            style: {

            },
            ...DEFAULT_OAUTH_PROPS
        }
    });
}

for (const color of [ BUTTON_COLOR.BLUE ]) {
    buttonConfigs.push({
        button: {
            style: {
                color
            },
            ...DEFAULT_OAUTH_PROPS
        }
    });
}

for (const shape of [ BUTTON_SHAPE.RECT, BUTTON_SHAPE.PILL ]) {
    buttonConfigs.push({
        button: {
            style: {
                shape
            },
            ...DEFAULT_OAUTH_PROPS
        }
    });
}
