/* @flow */
/** @jsx node */

import { node, type ElementNode } from "@krakenjs/jsx-pragmatic/src";

import { type ButtonStyle } from "./props";
import { componentStyle } from "./styles";

type StyleProps = {|
  style: ButtonStyle,
  nonce: string,
|};

// eslint-disable-next-line no-unused-vars
export function Style({ style, nonce }: StyleProps): ElementNode {
  const css = componentStyle();

  return <style nonce={nonce} innerHTML={css} />;
}
