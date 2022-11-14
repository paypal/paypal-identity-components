/* @flow */

import { isPayPalDomain } from "@paypal/sdk-client/src";
import {
  PopupOpenError as _PopupOpenError,
  destroy as zoidDestroy,
  destroyComponents,
} from "@krakenjs/zoid/src";

import { getAuthComponent, type AuthComponent } from "../zoid/auth";
import {
  getAuthButtonComponent,
  type AuthButtonComponent,
} from "../zoid/button";
import { AuthButton as _AuthButtonTemplate } from "../ui/button";
import type { LazyExport, LazyProtectedExport } from "../types";

function protectedExport<T>(xport: T): ?T {
  if (isPayPalDomain()) {
    return xport;
  }
}

export const AuthButton: LazyExport<AuthButtonComponent> = {
  __get__: () => getAuthButtonComponent(),
};

export const Auth: LazyProtectedExport<AuthComponent> = {
  __get__: () => protectedExport(getAuthComponent()),
};

export const AuthButtonTemplate: LazyProtectedExport<
  typeof _AuthButtonTemplate
> = {
  __get__: () => protectedExport(_AuthButtonTemplate),
};

export const PopupOpenError: LazyProtectedExport<typeof _PopupOpenError> = {
  __get__: () => protectedExport(_PopupOpenError),
};

export const destroyAll: LazyProtectedExport<typeof destroyComponents> = {
  __get__: () => protectedExport(destroyComponents),
};

export function setup() {
  getAuthButtonComponent();
  getAuthComponent();
}

export function destroy() {
  zoidDestroy();
}
