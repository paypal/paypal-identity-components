import { FUNDING } from "@paypal/sdk-constants/src";
import { $Values } from "utility-types";

declare global {
  // eslint-disable-next-line no-var,@typescript-eslint/no-unused-vars
  var __PAYPAL_IDENTITY__: {
    __REMEMBERED_FUNDING__: readonly $Values<typeof FUNDING>[];
    __URI__: {
      __BUTTON__: string;
      __AUTH__: string;
      __CARD_FIELDS__: string;
      __MENU__: string;
      __MODAL__: string;
      __WALLET__: string;
    };
  };
}
