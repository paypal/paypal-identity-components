/* @flow */

import type { ZalgoPromise } from "@krakenjs/zalgo-promise/src";
import { FUNDING, ENV, type LocaleType } from "@paypal/sdk-constants/src";

export type OnApproveData = {||};

export type OnApproveActions = {||};

export type OnCancelData = {||};

export type OnCancelActions = {||};

export type AuthPropsType = {|
  fundingSource: $Values<typeof FUNDING>,
  onApprove: (OnApproveData, OnApproveActions) => ?ZalgoPromise<void>,
  onCancel?: (OnCancelData, OnCancelActions) => ?ZalgoPromise<void>,
  env: $Values<typeof ENV>,
  locale: LocaleType,
  nonce: string,
  returnurl: string,
  responseType: string,
|};
