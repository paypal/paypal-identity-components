/* @flow */
/** @jsx node */
/* eslint max-lines: 0 */

import { node, dom } from 'jsx-pragmatic/src';
import { getPayPalDomainRegex, getLogger, getLocale, getEnv, getClientID,
    getSDKMeta, getCSPNonce, getBuyerCountry, getVersion, getPayPalDomain, getSessionID } from '@paypal/sdk-client/src';
import { create, CONTEXT, type ZoidComponent } from 'zoid/src';
import { isDevice, supportsPopups, inlineMemoize } from 'belter/src';
import { FUNDING } from '@paypal/sdk-constants/src';
import { Overlay, SpinnerPage } from '@paypal/common-components/src';

import type { AuthPropsType } from './props';
import { DEFAULT_POPUP_SIZE } from './config';

export function getAuthComponent() : ZoidComponent<AuthPropsType> {
    return inlineMemoize(getAuthComponent, () => {
        const component = create({
            tag: 'paypal-auth',
            url: () => `${ getPayPalDomain() }${ __PAYPAL_IDENTITY__.__URI__.__AUTH__ }`,
        
            attributes: {
                iframe: {
                    scrolling: 'yes'
                }
            },
        
            defaultContext: supportsPopups() ? CONTEXT.POPUP : CONTEXT.IFRAME,

            domain: getPayPalDomainRegex(),
        
            logger: getLogger(),
        
            prerenderTemplate: ({ doc, props }) => {
                return (
                    <SpinnerPage
                        nonce={ props.nonce }
                    />
                ).render(dom({ doc }));
            },

            containerTemplate: ({ context, close, focus, doc, event, frame, prerenderFrame }) => {

                return (
                    <Overlay
                        context={ context }
                        close={ close }
                        focus={ focus }
                        event={ event }
                        frame={ frame }
                        prerenderFrame={ prerenderFrame }
                        content={ {} }
                    />
                ).render(dom({ doc }));
            },
        
            props: {

                ctxId: {
                    type:       'string',
                    queryParam: true,
                    required:   false
                },

                clientID: {
                    type:       'string',
                    value:      () => getClientID()
                },
        
                sessionID: {
                    type:       'string',
                    value:      getSessionID,
                    queryParam: false
                },
        
                authSessionID: {
                    type:       'string',
                    queryParam: false,
                    required:   false
                },
                
                env: {
                    type:       'string',
                    queryParam: true,
                    value:      getEnv
                },
        
                sdkMeta: {
                    type:       'string',
                    queryParam: true,
                    value:      getSDKMeta
                },
        
                nonce: {
                    type:     'string',
                    required: false,
                    value:    getCSPNonce
                },

                buyerCountry: {
                    type:       'string',
                    queryParam: true,
                    required:   false,
                    default:    getBuyerCountry
                },
        
                locale: {
                    type:          'object',
                    queryParam:    'locale.x',
                    allowDelegate: true,
                    queryValue:    ({ value }) => `${ value.lang }_${ value.country }`,
                    value:         getLocale
                },

                version: {
                    type:       'string',
                    queryParam: true,
                    value:      getVersion
                },

                fundingSource: {
                    type:       'string',
                    queryParam: true,
                    default:    () => FUNDING.PAYPAL
                },
                
                onApprove: {
                    type:     'function'
                },
                
                accessToken: {
                    type:     'string',
                    required: false
                },
        
                onCancel: {
                    type:     'function',
                    required: false
                },

                test: {
                    type:    'object',
                    default: () => (window.__test__ || { action: 'auth' })
                }
            },
        
            dimensions: isDevice()
                ? { width:  '100%', height: `${ DEFAULT_POPUP_SIZE.HEIGHT }px` }
                : { width:  `${ DEFAULT_POPUP_SIZE.WIDTH }px`, height: `${ DEFAULT_POPUP_SIZE.HEIGHT }px` }
        });
    
        return component;
    });
}
