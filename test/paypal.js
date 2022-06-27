/* @flow */

import { setupSDK, insertMockSDKScript } from "@paypal/sdk-client/src";

import * as paypalAuth from "../src/interface/button"; // eslint-disable-line import/no-namespace

insertMockSDKScript();

window.mockDomain = "mock://www.paypal.com";

setupSDK([
  {
    name: "paypal-auth",
    requirer: () => paypalAuth,
  },
]);
