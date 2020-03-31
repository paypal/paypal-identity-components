/* @flow */
/** @jsx node */

import { node, type ElementNode, type ComponentNode } from 'jsx-pragmatic/src';
import { PayPalLogo, LOGO_COLOR, PPLogo, CreditLogo } from '@paypal/sdk-logos/src';
import { type LocaleType, FUNDING } from '@paypal/sdk-constants/src';
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

type PPCreditLogoProps = {|
    style : ButtonStyle,
    locale : LocaleType
|};

// function to render the "PP" abreviated logo
function PPSymbol({ style } : LogoProps) : ComponentNode<LogoProps> {
    const { color = BUTTON_COLOR.BLUE } = style;
    if (color === BUTTON_COLOR.BLUE || color === BUTTON_COLOR.DARKBLUE) {
        return <PPLogo logoColor={ LOGO_COLOR.WHITE } />;
    }

    if (color === BUTTON_COLOR.GOLD) {
        return <PPLogo logoColor={ LOGO_COLOR.BLUE } />;
    }

    throw new Error(`Unsupported color (PP logo): ${ color }`);
    
}

// function to render the "CREDIT" logo
function PPCreditLogo({ style, locale } : PPCreditLogoProps) : ComponentNode<LogoProps> {
    const { color } = style;

    if (color === BUTTON_COLOR.DARKBLUE) {
        return <CreditLogo logoColor={ LOGO_COLOR.WHITE } locale={ locale } />;
    }

    throw new Error(`Unsupported color (Credit logo): ${ color }`);
    
}

// function to render the "PayPal" brand logo
function Logo({ style } : LogoProps) : ComponentNode<LogoProps> {
    const { color } = style;

    if (color === BUTTON_COLOR.BLUE || color === BUTTON_COLOR.DARKBLUE) {
        return <PayPalLogo logoColor={ LOGO_COLOR.WHITE } />;
    }

    if (color === BUTTON_COLOR.GOLD) {
        return <PayPalLogo logoColor={ LOGO_COLOR.BLUE } />;
    }

    throw new Error(`Unsupported color (Paypal logo): ${ color }`);
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
                    <PPSymbol style={ style } />
                    <Logo style={ style } />
                    {
                        fundingSource === FUNDING.CREDIT ?
                            <PPCreditLogo style={ style } locale={ locale } /> :
                            <Label style={ style } content={ content } />
                    }
                </div>
            </div>
        </div>
    );
}

export { DEFAULT_PROPS } from './props';
