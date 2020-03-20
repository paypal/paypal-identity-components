/* @flow */
/* eslint max-lines: 0 */

import { wrapPromise } from 'belter/src';

import { createTestContainer,
    destroyTestContainer, WEBVIEW_USER_AGENT } from '../common';

for (const flow of [ 'popup', 'iframe' ]) {

    describe(`paypal button component happy path on ${ flow }`, () => {

        beforeEach(() => {
            createTestContainer();

            if (flow === 'iframe') {
                window.navigator.mockUserAgent = WEBVIEW_USER_AGENT;
            }
        });

        afterEach(() => {
            destroyTestContainer();
        });

        it('should render a button into a container and click on the button, then complete the auth without createOrder', () => {
            return wrapPromise(({ expect, avoid }) => {
                window.paypal.AuthButton({
                    responseType:   'code',
                    scopes:          [ 'email' ],
                    billingOptions: {
                        type:        'MERCHANT',
                        productCode: 'PRODUCT_CODE',
                        cancelUrl:   'www.paypal.com'
                    },
                    onApprove: expect('onApprove'),
                    onCancel:  avoid('onCancel')
                }).render('#testContainer');
            });
        });
    });
}
