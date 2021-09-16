/* @flow */
/** @jsx node */

import { node, dom, type ChildType } from 'jsx-pragmatic/src';
import { popup, supportsPopups, writeElementToWindow } from 'belter/src';
import { assertSameDomain, type CrossDomainWindowType } from 'cross-domain-utils/src';
import { SpinnerPage } from '@paypal/common-components/src';

import { DEFAULT_POPUP_SIZE } from '../auth';
// import { AuthButton } from '../../ui';
import { type ButtonProps } from '../../ui/button/props';
// import { CLASS, ATTRIBUTE, BUTTON_COLOR, TEXT_COLOR } from '../../constants';


type PrerenderedButtonProps = {|
    nonce : ?string,
    props : ButtonProps,
    onRenderAuth : ({|
        win? : ?CrossDomainWindowType
    |}) => void
|};

export function PrerenderedButton({ nonce, onRenderAuth, props } : PrerenderedButtonProps) : ChildType {

    const handleClick = () => {
        if (supportsPopups()) {
            const win = assertSameDomain(popup('', {
                width:  DEFAULT_POPUP_SIZE.WIDTH,
                height: DEFAULT_POPUP_SIZE.HEIGHT
            }));

            const doc = window.document;

            const spinner = (
                <SpinnerPage nonce={ nonce } />
            ).render(dom({ doc }));

            writeElementToWindow(win, spinner, props);

            onRenderAuth({ win });

        } else {
            onRenderAuth({ win: null });
        }
    };

    
    return (
        <html>
            <body>
                <SpinnerPage nonce={ nonce } onClick={ handleClick } />
                {/* <AuthButton { ...props } onClick={ handleClick } /> */}
            </body>
        </html>
    );
}
