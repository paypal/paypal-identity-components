/* @flow */
/** @jsx node */

import { node, type ElementNode, type ComponentNode } from 'jsx-pragmatic/src';
import { PayPalLogo, LOGO_COLOR } from '@paypal/sdk-logos/src';
import { noop } from 'belter/src';

import { CLASS, ATTRIBUTE, BUTTON_COLOR, TEXT_COLOR, BUTTON_LABEL } from '../../constants';
import { Text } from '../text';

import { normalizeButtonProps, type ButtonStyle, type ButtonContent, type ButtonPropsInputs } from './props';
import { Style } from './style';

type ButtonProps = ButtonPropsInputs & {|
    onClick? : Function
|};

export function validateButtonProps(props : ButtonProps) {
    normalizeButtonProps(props);
}

type LogoProps = {|
    style : ButtonStyle
|};

function Logo({ style } : LogoProps) : ComponentNode<LogoProps> {
    const { color } = style;

    if (color === BUTTON_COLOR.BLUE) {
        return <PayPalLogo logoColor={ LOGO_COLOR.WHITE } />;
    }

    throw new Error(`Unsupported button color: ${ color }`);
}

type LabelProps = {|
    style : ButtonStyle,
    content : ButtonContent
|};

function Label({ style, content } : LabelProps) : ?ComponentNode<{||}> {
    const { label } = style;

    if (!label) {
        return;
    }

    if (label === BUTTON_LABEL.CONNECT) {
        return <Text>{ content.connectLabel }</Text>;
    }

    throw new Error(`Unsupported button label: ${ label || 'undefined' }`);
}

export function AuthButton(props : ButtonProps) : ElementNode {
    const { onClick = noop } = props;
    const { fundingSource, style, locale, env,
        nonce, content } = normalizeButtonProps(props);
    const { shape, color } = style;

    const clickHandler = (event, opts) => {
        event.preventDefault();
        event.stopPropagation();
        event.target.blur();
        onClick(event, { fundingSource, ...opts });
    };

    const keypressHandler = (event, opts) => {
        if (event.keyCode === 13 || event.keyCode === 32) {
            clickHandler(event, opts);
        }
    };

    return (
        <div class={ [
            CLASS.CONTAINER,
            `${ CLASS.SHAPE }-${ shape }`,
            `${ CLASS.ENV }-${ env }`
        ].join(' ') }>

            <Style
                nonce={ nonce }
                style={ style }
                locale={ locale }
            />

            <div
                role='button'
                { ...{
                    [ATTRIBUTE.BUTTON]:         true,
                    [ATTRIBUTE.FUNDING_SOURCE]: fundingSource
                } }
                class={ [
                    CLASS.BUTTON,
                    `${ CLASS.SHAPE }-${ shape }`,
                    `${ CLASS.ENV }-${ env }`,
                    `${ CLASS.COLOR }-${ color }`,
                    `${ CLASS.TEXT_COLOR }-${ TEXT_COLOR.WHITE }`
                ].join(' ') }
                onClick={ clickHandler }
                onKeyPress={ keypressHandler }
                tabindex='0'>

                <div class={ CLASS.BUTTON_LABEL }>
                    <Logo style={ style } /> <Label style={ style } content={ content } />
                </div>
            </div>
        </div>
    );
}

export { DEFAULT_PROPS } from './props';
