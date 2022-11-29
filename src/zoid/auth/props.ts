import type { $Values } from "utility-types";
import { ZalgoPromise } from "@krakenjs/zalgo-promise";
import type { LocaleType } from "@paypal/sdk-constants/src";
import { FUNDING, ENV } from "@paypal/sdk-constants/src";

export type OnApproveData = {};

export type OnApproveActions = {};

export type OnCancelData = {};

export type OnCancelActions = {};

export type AuthPropsType = {
  fundingSource: $Values<typeof FUNDING>;
  onApprove: (
    arg0: OnApproveData,
    arg1: OnApproveActions
  ) => ZalgoPromise<void> | null | undefined;
  onCancel?: (
    arg0: OnCancelData,
    arg1: OnCancelActions
  ) => ZalgoPromise<void> | null | undefined;
  env: $Values<typeof ENV>;
  // @ts-expect-error type import is broken, should work after sdk-constants TS conversion
  locale: LocaleType;
  nonce: string;
  returnurl: string;
  responseType: string;
};
