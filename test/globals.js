/* @flow */

export const fundingEligibility = {
    bancontact: {
        eligible: false
    },
    card: {
        eligible:        true,
        isPayPalBranded: true,

        vendors: {
            visa: {
                eligible: true
            },
            mastercard: {
                eligible: true
            },
            amex: {
                eligible: true
            },
            discover: {
                eligible: true
            },
            hiper: {
                eligible: false
            },
            elo: {
                eligible: false
            },
            jcb: {
                eligible: false
            }
        }
    },
    credit: {
        eligible: false
    },
    sepa: {
        eligible: false
    },
    eps: {
        eligible: false
    },
    giropay: {
        eligible: false
    },
    ideal: {
        eligible: false
    },
    mybank: {
        eligible: false
    },
    p24: {
        eligible: false
    },
    paypal: {
        eligible: true
    },
    sofort: {
        eligible: false
    },
    venmo: {
        eligible: false
    },
    wechatpay: {
        eligible: false
    },
    oxxo: {
        eligible: false
    },
    boleto: {
        eligible: false
    },
    maxima: {
        eligible: false
    },
    zimpler: {
        eligible: false
    },
    payu: {
        eligible: false
    },
    verkkopankki: {
        eligible: false
    },
    blik: {
        eligible: false
    },
    trustly: {
        eligible: false
    },
    itau: {
        eligible: false
    }
};

export const testGlobals = {
    __PAYPAL_IDENTITY__: {
        __URI__:                {
            __AUTH__:        `/base/test/integration/windows/auth/index.htm?authurl=true`,
            __BUTTON__:      `/base/test/integration/windows/auth-button/index.htm`,
            __MENU__:        `/base/test/integration/windows/menu/index.htm`,
            __CARD_FIELDS__: `/base/test/integration/windows/card-fields/index.htm`,
            __WALLET__:      `/base/test/integration/windows/wallet/index.htm`
        }
    },

    __FUNDING_ELIGIBILITY__: () => `window.__TEST_FUNDING_ELIGIBILITY__ || ${ JSON.stringify(fundingEligibility) }`,

    __PROTOCOL__:       'http',
    __PORT__:           8000,
    __STAGE_HOST__:     'msmaster.qa.paypal.com',
    __HOST__:           'test.paypal.com',
    __HOSTNAME__:       'test.paypal.com',
    __SDK_HOST__:       'test.paypal.com',
    __PATH__:           '/sdk/js',
    __VERSION__:        '1.0.55',
    __NAMESPACE__:      'paypal',
    __COMPONENTS__:     [ 'button' ],
    __CORRELATION_ID__: 'abc123'
};
