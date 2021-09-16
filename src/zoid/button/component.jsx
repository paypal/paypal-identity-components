/* @flow */
/** @jsx node */
/* eslint max-lines: 0 */

import {
    getLogger, getLocale, getClientID, getEnv, getSessionID,
    getMerchantID, getPayPalDomainRegex, getCurrency, getSDKMeta, getCSPNonce, getBuyerCountry, getPlatform,
    getPartnerAttributionID, getCorrelationID, getDebug, getStageHost, getAPIStageHost, getPayPalDomain } from '@paypal/sdk-client/src';
import { create, type ZoidComponent } from 'zoid/src';
import { uniqueID, memoize } from 'belter/src';
import { node, dom } from 'jsx-pragmatic/src';
import { getRefinedFundingEligibility } from '@paypal/funding-components/src';
import { FUNDING } from '@paypal/sdk-constants/src';

import { normalizeButtonStyle, type ButtonProps } from '../../ui/button/props';

import { validateScopes, validateResponseType, validateInputLabel, validateRedirectUrl } from './util';
import { containerTemplate } from './container';
import { PrerenderedButton } from './prerender';

// $FlowFixMe
export const getAuthButtonComponent = memoize(() : ZoidComponent<ButtonProps> => {
console.log(1112222)
    const AuthButton = create({
        tag:  'paypal-auth-button',
        url: () => `${ getPayPalDomain() }${ __PAYPAL_IDENTITY__.__URI__.__BUTTON__ }`,

        domain: getPayPalDomainRegex(),
        
        autoResize: {
            width:  false,
            height: true
        },
        
        containerTemplate,

        logger: getLogger(),
        
        prerenderTemplate: ({ state, props, doc }) => {
          
            return (
                <PrerenderedButton
                    nonce={ props.nonce }
                    props={ props }
                    onRenderAuth={ ({ win }) => {
                        state.prerenderDetails = { win };
                    } }
                />
            ).render(dom({ doc }));
        },

        attributes: {
            iframe: {
                allowpaymentrequest: 'allowpaymentrequest',
                scrolling:           'no',
            }
        },

        props: {
            style: {
                type:       'object',
                queryParam: true,
                required:   false,
                decorate:   ({ props, value }) => {
                    // $FlowFixMe
                    return normalizeButtonStyle(props, value);
                },

                validate: ({ props, value = {} }) => {
                    // $FlowFixMe
                    normalizeButtonStyle(props, value);
                },

                default: () => ({})
            },

            locale: {
                type:       'object',
                queryParam: true,
                value:      getLocale
            },

            fundingSource: {
                type:       'string',
                queryParam: true,
                default:    () => FUNDING.PAYPAL
            },

            sdkMeta: {
                type:        'string',
                queryParam:  true,
                sendToChild: true,
                value:       getSDKMeta
            },

            onApprove: {
                type:     'function',
                required: false
            },

            onCancel: {
                type:     'function',
                required: false
            },

            onClick: {
                type:     'function',
                required: false
            },

            getPrerenderDetails: {
                type:  'function',
                value: ({ state }) => () => state.prerenderDetails
            },

            clientID: {
                type:       'string',
                queryParam:  true,
                value:      getClientID
            },

            partnerAttributionID: {
                type:       'string',
                required:   false,
                value:      getPartnerAttributionID
            },

            correlationID: {
                type:       'string',
                required:   false,
                value:      getCorrelationID
            },

            sessionID: {
                type:       'string',
                value:      getSessionID,
                queryParam: true
            },

            authButtonSessionID: {
                type:       'string',
                value:      uniqueID,
                queryParam: true
            },

            env: {
                type:       'string',
                queryParam: true,
                value:      getEnv
            },

            stageHost: {
                type:       'string',
                value:      getStageHost,
                required:   false
            },

            apiStageHost: {
                type:       'string',
                value:      getAPIStageHost,
                required:   false
            },

            platform: {
                type:       'string',
                queryParam: true,
                value:      getPlatform
            },
            
            currency: {
                type:       'string',
                queryParam: true,
                value:      getCurrency
            },

            buyerCountry: {
                type:       'string',
                queryParam: true,
                required:   false,
                value:      getBuyerCountry
            },

            merchantID: {
                type:       'array',
                queryParam: true,
                value:      getMerchantID
            },
            nonce: {
                type:     'string',
                queryParam: true,
                value:     getCSPNonce
            },
            csp: {
                type:     'object',
                required: false,
                queryParam: true,
                value:    () => {
                    return {
                        nonce: getCSPNonce()
                    };
                }
            },

            debug: {
                type:       'boolean',
                value:      getDebug,
                queryParam: true
            },

            test: {
                type: 'object',
                default() : Object {
                    return {
                        action: 'auth'
                    };
                }
            },
            returnurl: {
                type:       'string',
                queryParam: true,
                validate:   ({ value }) => {
                    return validateRedirectUrl(value);
                }
            },
            scopes: {
                type:          'array',
                required:      true,
                queryParam:    true,
                validate:      ({ value }) => {
                    return validateScopes(value);
                },
                queryValue:    ({ value }) => {
                    return value.join(' ');
                }
            },

            responseType: {
                type:       'string',
                queryParam: true,
                required:   true,
                validate:   ({ value }) => {
                    return validateResponseType(value);
                }
            },

            inputLabel: {
                type:       'string',
                queryParam: true,
                required:   false,
                validate:   ({ value }) => {
                    return validateInputLabel(value);
                }
            },

            billingOptions: {
                type:          'object',
                queryParam:    true,
                required:      false,
                serialization: 'base64'
            },

            state: {
                type:       'string',
                queryParam: true,
                default:    () => ('')
            }
        }
    });

    const ButtonWrapper = (props = {}) => {
        const instance = AuthButton(props);
        instance.isEligible = () => {
            const { fundingSource = FUNDING.PAYPAL } = props;
            const fundingEligibility = getRefinedFundingEligibility();
            return Boolean(fundingEligibility[fundingSource] && fundingEligibility[fundingSource].eligible);
        };

        return instance;
    };

    ButtonWrapper.driver = AuthButton.driver;
    ButtonWrapper.isChild = AuthButton.isChild;
    ButtonWrapper.canRenderTo = AuthButton.canRenderTo;

    // $FlowFixMe
    return ButtonWrapper;
});
