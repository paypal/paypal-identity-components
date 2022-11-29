/** @jsx node */

import { node } from "@krakenjs/jsx-pragmatic/src";
import type { ElementNode } from "../../types";

import type { ButtonStyle } from "./props";

import { componentStyle } from "./styles";

type StyleProps = {
  style: ButtonStyle;
  nonce: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Style({ style, nonce }: StyleProps): ElementNode {
  const css = componentStyle();

  return <style nonce={nonce} innerHTML={css} />;
}
