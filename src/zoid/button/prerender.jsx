/* @flow */
/** @jsx node */

import { node, type ChildType } from 'jsx-pragmatic/src';
// import { popup, supportsPopups, writeElementToWindow } from 'belter/src';
import {  type CrossDomainWindowType } from 'cross-domain-utils/src';
import { VenmoSpinnerPage } from '@paypal/common-components/src/ui';
import type { ZoidProps } from 'zoid/src';

// import { DEFAULT_POPUP_SIZE } from '../auth';
import { AuthButton } from '../../ui';
import { type ButtonProps } from '../../ui/button/props';
// import { CLASS } from '../../constants';


type PrerenderedButtonProps = {|
    nonce : ?string,
    props : ZoidProps<ButtonProps>,
    onRenderAuth : ({|
        win? : ?CrossDomainWindowType
    |}) => void
|};

export function PrerenderedButton({ nonce, props } : PrerenderedButtonProps) : ChildType {
    return (
        <html>
            <body>
                {/* $FlowFixMe */}
                <AuthButton { ...props } />
                <VenmoSpinnerPage nonce={ nonce } />
            </body>
        </html>
    );
}
