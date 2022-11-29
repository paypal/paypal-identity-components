import { setupSDK } from "@paypal/sdk-client/src";

import * as paypalButton from "./src/interface/button";

setupSDK([
  {
    name: "button",
    requirer: () => paypalButton,
  },
]);
