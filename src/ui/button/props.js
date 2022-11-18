/* @flow */

import { ZalgoPromise } from "@krakenjs/zalgo-promise/src";
import { values, uniqueID } from "@krakenjs/belter/src";
import {
  FUNDING,
  PLATFORM,
  INTENT,
  ENV,
  COUNTRY,
  LANG,
  COUNTRY_LANGS,
  type LocaleType,
  CARD,
} from "@paypal/sdk-constants/src";
import { type CrossDomainWindowType } from "@krakenjs/cross-domain-utils/src";
import { SUPPORTED_FUNDING_SOURCES } from "@paypal/funding-components/src";

import { BUTTON_LABEL, BUTTON_COLOR, BUTTON_SHAPE } from "../../constants";

export type OnApproveData = {||};

export type OnApproveActions = {||};

export type OnApprove = (
  data: OnApproveData,
  actions: OnApproveActions
) => ZalgoPromise<void> | void;

export type OnCancelData = {||};

export type OnCancelActions = {||};

export type OnCancel = (
  data: OnCancelData,
  actions: OnCancelActions
) => ZalgoPromise<void> | void;

export type OnClickData = {||};

export type OnClickActions = {||};

export type OnClick = (OnClickData, OnClickActions) => void;

export type BillingOptions = {|
  type?: string | void,
  productCode?: string | void,
  cancelUrl?: string | void,
  returnUrl?: string | void,
|};

export type ButtonStyle = {|
  label: $Values<typeof BUTTON_LABEL> | void,
  color: $Values<typeof BUTTON_COLOR>,
  shape: $Values<typeof BUTTON_SHAPE>,
  height?: number,
|};

export type ButtonStyleInputs = {|
  label?: $PropertyType<ButtonStyle, "label"> | void,
  color?: $PropertyType<ButtonStyle, "color"> | void,
  shape?: $PropertyType<ButtonStyle, "shape"> | void,
  height?: $PropertyType<ButtonStyle, "height"> | void,
|};

export type RenderButtonProps = {|
  style: ButtonStyle,
  locale: LocaleType,
  fundingSource: ?$Values<typeof FUNDING>,
  env: $Values<typeof ENV>,
  stage?: string,
  stageUrl?: string,
  platform: $Values<typeof PLATFORM>,
  clientID: string,
  sessionID: string,
  authButtonSessionID: string,
  nonce: string,
  content: string,
  customLabel: string,
  responseType: string,
|};

export type PrerenderDetails = {|
  win: ?CrossDomainWindowType,
  fundingSource: $Values<typeof FUNDING>,
  card: ?$Values<typeof CARD>,
|};

export type GetPrerenderDetails = () => PrerenderDetails | void;

export type ButtonProps = {|
  fundingSource: $Values<typeof FUNDING>,
  onCancel: OnCancel,
  onApprove: OnApprove,
  onClick: OnClick,
  getPrerenderDetails: GetPrerenderDetails,
  style: ButtonStyleInputs,
  locale: LocaleType,
  env: $Values<typeof ENV>,
  stage?: string,
  stageUrl?: string,
  platform: $Values<typeof PLATFORM>,
  clientID: string,
  sessionID: string,
  authButtonSessionID: string,
  nonce: string,
  scopes: $ReadOnlyArray<string>,
  responseType: string,
  billingOptions: BillingOptions,
  state?: string,
  cspNonce?: {|
    nonce?: string,
  |},
|};

export type ButtonPropsInputs = {|
  clientID: string,
  fundingSource?: $Values<typeof FUNDING>,
  style?: ButtonStyleInputs | void,
  locale?: $PropertyType<ButtonProps, "locale"> | void,
  env?: $PropertyType<ButtonProps, "env"> | void,
  stage?: $PropertyType<ButtonProps, "stage"> | void,
  stageUrl?: $PropertyType<ButtonProps, "stageUrl"> | void,
  platform?: $PropertyType<ButtonProps, "platform"> | void,
  authButtonSessionID?: $PropertyType<ButtonProps, "sessionID"> | void,
  sessionID?: $PropertyType<ButtonProps, "sessionID"> | void,
  nonce: string,
  responseType: string,
  csp?: {|
    nonce?: string,
  |},
  displayLabel?: boolean,
  customLabel: string,
  onClick?: OnClick,
|};

export const DEFAULT_STYLE = {
  COLOR: BUTTON_COLOR.BLUE,
  SHAPE: BUTTON_SHAPE.PILL,
};

export const DEFAULT_PROPS = {
  LOCALE: {
    country: COUNTRY.US,
    lang: LANG.EN,
  },
  INTENT: INTENT.CAPTURE,
  ENV: ENV.PRODUCTION,
  PLATFORM: PLATFORM.DESKTOP,
};

// const ALLOWED_COLORS = values(BUTTON_COLOR);
const ALLOWED_SHAPES = values(BUTTON_SHAPE);

export function normalizeButtonStyle(
  props: ?ButtonPropsInputs,
  style: ButtonStyleInputs
): ButtonStyle {
  if (!style) {
    throw new Error(`Expected props.style to be set`);
  }

  let ALLOWED_COLORS = [
    BUTTON_COLOR.BLACK,
    BUTTON_COLOR.BLUE,
    BUTTON_COLOR.DARKBLUE,
    BUTTON_COLOR.GOLD,
    BUTTON_COLOR.SILVER,
    BUTTON_COLOR.WHITE,
  ];
  // $FlowFixMe[incompatible-use]
  const { fundingSource = FUNDING.PAYPAL } = props;
  if (fundingSource === FUNDING.PAYPAL) {
    ALLOWED_COLORS = [
      BUTTON_COLOR.BLACK,
      BUTTON_COLOR.BLUE,
      BUTTON_COLOR.DARKBLUE,
      BUTTON_COLOR.GOLD,
      BUTTON_COLOR.SILVER,
      BUTTON_COLOR.WHITE,
    ];
  }
  if (fundingSource === FUNDING.CREDIT) {
    ALLOWED_COLORS = [BUTTON_COLOR.DARKBLUE];
  }

  const {
    label,
    color = fundingSource === FUNDING.CREDIT
      ? BUTTON_COLOR.DARKBLUE
      : BUTTON_COLOR.BLUE,
    shape = BUTTON_SHAPE.PILL,
    height,
  } = style;

  if (color && ALLOWED_COLORS.indexOf(color) === -1) {
    throw new Error(
      `Unexpected style.color for ${fundingSource} button: ${color}, expected ${ALLOWED_COLORS.join(
        ", "
      )}`
    );
  }
  if (shape && ALLOWED_SHAPES.indexOf(shape) === -1) {
    throw new Error(
      `Unexpected style.shape for ${fundingSource} button: ${shape}, expected ${ALLOWED_SHAPES.join(
        ", "
      )}`
    );
  }
  if (height !== undefined) {
    if (typeof height !== "number") {
      throw new TypeError(
        `Expected style.height to be a number, got: ${height}`
      );
    }

    const [minHeight, maxHeight] = [35, 50];

    if (height < minHeight || height > maxHeight) {
      throw new Error(
        `Expected style.height to be between ${minHeight}px and ${maxHeight}px - got ${height}px`
      );
    }
  }
  return { label, color, shape, height };
}

const COUNTRIES = values(COUNTRY);
const ENVS = values(ENV);
const PLATFORMS = values(PLATFORM);

export function normalizeButtonProps(
  props: ?ButtonPropsInputs
): RenderButtonProps {
  if (!props) {
    throw new Error(`Expected props`);
  }
  let {
    clientID,
    fundingSource,
    style,
    locale = DEFAULT_PROPS.LOCALE,
    env = DEFAULT_PROPS.ENV,
    platform = DEFAULT_PROPS.PLATFORM,
    sessionID = uniqueID(),
    authButtonSessionID = uniqueID(),
    csp = {},
    nonce,
    content = "",
    responseType,
    customLabel,
  } = props;

  const { country, lang } = locale;

  if (!country || COUNTRIES.indexOf(country) === -1) {
    throw new Error(`Expected valid country, got ${country || "undefined"}`);
  }

  if (!lang || COUNTRY_LANGS[country].indexOf(lang) === -1) {
    throw new Error(`Expected valid lang, got ${lang || "undefined"}`);
  }

  if (ENVS.indexOf(env) === -1) {
    throw new Error(`Expected valid env, got ${env || "undefined"}`);
  }

  if (PLATFORMS.indexOf(platform) === -1) {
    throw new Error(`Expected valid platform, got ${platform || "undefined"}`);
  }
  if (csp && csp.nonce) {
    nonce = csp.nonce;
  }
  if (fundingSource) {
    if (SUPPORTED_FUNDING_SOURCES.indexOf(fundingSource) === -1) {
      throw new Error(`Invalid funding source: ${fundingSource}`);
    }
  }
  // $FlowFixMe[incompatible-call]
  style = normalizeButtonStyle(props, style);
  return {
    clientID,
    fundingSource,
    style,
    locale,
    env,
    platform,
    authButtonSessionID,
    sessionID,
    nonce,
    content,
    customLabel,
    responseType,
  };
}
