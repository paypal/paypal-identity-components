/* @flow */

export const DEFAULT_POPUP_SIZE = {
  WIDTH: 500,
  HEIGHT: 590,
};

export function getRedirectUrl(): string {
  return "urn:ietf:wg:oauth:2.0:oob";
}

export function getMerchantDomain(): string {
  return window.location.href;
}