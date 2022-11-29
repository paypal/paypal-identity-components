const postRobotGlobals = require("@krakenjs/post-robot/globals");
const zoidGlobals = require("@krakenjs/zoid/globals");

export const globals = {
  __ZOID__: zoidGlobals.__ZOID__,

  __POST_ROBOT__: {
    ...postRobotGlobals.__POST_ROBOT__,
    __IE_POPUP_SUPPORT__: false,
  },

  __PAYPAL_IDENTITY__: {
    __URI__: {
      __AUTH__: "/connect",
      __BUTTON__: "/apps/connectButton",
    },
  },
};
