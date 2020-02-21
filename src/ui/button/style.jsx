/* @flow */
/** @jsx node */

import { node, type ElementNode } from 'jsx-pragmatic/src';

import { type ButtonStyle } from './props';
import { componentStyle } from './styles';

type StyleProps = {|
    style : ButtonStyle,
    nonce : string
|};

export function Style({ style, nonce } : StyleProps) : ElementNode {
    const css = componentStyle();

    return (
        <style nonce={ nonce } innerHTML={ css } />
    );
}
