/* @flow */

import { setupSDK } from "@paypal/sdk-client/src";

import * as paypalButton from "./src/interface/button"; // eslint-disable-line import/no-namespace

setupSDK([
  {
    name: "button",
    requirer: () => paypalButton,
  },
]);
