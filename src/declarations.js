/* @flow */
/* eslint import/unambiguous: 0 */

// $FlowFixMe[toplevel-library-import]
import { FUNDING } from "@paypal/sdk-constants/src";

declare var __PAYPAL_IDENTITY__: {|
  __REMEMBERED_FUNDING__: $ReadOnlyArray<$Values<typeof FUNDING>>,
  __URI__: {|
    __BUTTON__: string,
    __AUTH__: string,
    __CARD_FIELDS__: string,
    __MENU__: string,
    __MODAL__: string,
    __WALLET__: string,
  |},
|};
