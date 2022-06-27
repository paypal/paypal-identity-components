/* @flow */
/** @jsx node */

import {
  node,
  type ElementNode,
  type ComponentNode,
} from "@krakenjs/jsx-pragmatic/src";
import { LOGO_COLOR, PPLogo } from "@paypal/sdk-logos/src";
import { noop } from "@krakenjs/belter/src";

import { CLASS, ATTRIBUTE, BUTTON_COLOR, TEXT_COLOR } from "../../constants";
import { Text } from "../text";

import {
  normalizeButtonProps,
  type ButtonStyle,
  type ButtonPropsInputs,
} from "./props";
import { Style } from "./style";

type ButtonProps = ButtonPropsInputs & {|
  onClick?: Function,
|};

export function validateButtonProps(props: ButtonProps) {
  normalizeButtonProps(props);
}

type LogoProps = {|
  style: ButtonStyle,
|};

// function to render the "PP" abreviated logo
function PPSymbol({ style }: LogoProps): ComponentNode<LogoProps> {
  const { color = BUTTON_COLOR.BLUE } = style;
  if (
    color === BUTTON_COLOR.BLUE ||
    color === BUTTON_COLOR.DARKBLUE ||
    color === BUTTON_COLOR.BLACK
  ) {
    return <PPLogo logoColor={LOGO_COLOR.WHITE} />;
  }

  if (
    color === BUTTON_COLOR.GOLD ||
    color === BUTTON_COLOR.WHITE ||
    color === BUTTON_COLOR.SILVER
  ) {
    return <PPLogo logoColor={LOGO_COLOR.BLUE} />;
  }

  throw new Error(`Unsupported color (PP logo): ${color}`);
}

type LabelProps = {|
  style: ButtonStyle,
  content: string,
|};

function Label({ style, content }: LabelProps): ?ComponentNode<{||}> {
  const { label } = style;
  const text = content;
  if (!label) {
    return <Text>Log in with PayPal</Text>;
  }

  if (label) {
    return <Text>{label}</Text>;
  }

  throw new Error(`Unsupported button label: ${label || text}`);
}

export function AuthButton(props: ButtonProps): ElementNode {
  const { onClick = noop } = props;
  const { fundingSource, style, env, nonce, customLabel } =
    normalizeButtonProps(props);
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
    <div
      class={[
        CLASS.CONTAINER,
        `${CLASS.SHAPE}-${shape}`,
        `${CLASS.ENV}-${env}`,
      ].join(" ")}
    >
      <Style nonce={nonce} style={style} />

      <div
        role="button"
        {...{
          [ATTRIBUTE.BUTTON]: true,
          [ATTRIBUTE.FUNDING_SOURCE]: fundingSource,
        }}
        class={[
          CLASS.BUTTON,
          `${CLASS.SHAPE}-${shape}`,
          `${CLASS.ENV}-${env}`,
          `${CLASS.COLOR}-${color}`,
          `${CLASS.TEXT_COLOR}-${TEXT_COLOR.WHITE}`,
        ].join(" ")}
        onClick={clickHandler}
        onKeyPress={keypressHandler}
        tabindex="0"
      >
        {customLabel && (
          <div class={CLASS.BUTTON_LABEL}>
            <PPSymbol style={style} />
            <Label style={style} content={customLabel} />
          </div>
        )}
      </div>
    </div>
  );
}

export { DEFAULT_PROPS } from "./props";
