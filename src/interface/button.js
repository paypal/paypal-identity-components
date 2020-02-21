/* @flow */

import { isPayPalDomain } from '@paypal/sdk-client/src';
import { PopupOpenError as _PopupOpenError, destroy as zoidDestroy, destroyComponents } from 'zoid/src';

import { getAuthComponent } from '../zoid/auth';
import { getAuthButtonComponent } from '../zoid/button';
import { AuthButton as _AuthButtonTemplate } from '../ui/button';

function protectedExport<T>(xport : T) : ?T {
    if (isPayPalDomain()) {
        return xport;
    }
}

export const AuthButton = {
    __get__: () => getAuthButtonComponent()
};

export const Auth = {
    __get__: () => protectedExport(getAuthComponent())
};

export const AuthButtonTemplate = {
    __get__: () => protectedExport(_AuthButtonTemplate)
};

export const PopupOpenError = {
    __get__: () => protectedExport(_PopupOpenError)
};

export const destroyAll = {
    __get__: () => protectedExport(destroyComponents)
};

export function setup() {
    getAuthButtonComponent();
    getAuthComponent();
}

export function destroy() {
    zoidDestroy();
}
