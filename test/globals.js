/* @flow */

export const testGlobals = {
  __PAYPAL_IDENTITY__: {
    __URI__: {
      __AUTH__: `/base/test/integration/windows/auth/index.htm?authurl=true`,
      __BUTTON__: `/base/test/integration/windows/auth-button/index.htm`,
      __MENU__: `/base/test/integration/windows/menu/index.htm`,
      __CARD_FIELDS__: `/base/test/integration/windows/card-fields/index.htm`,
      __WALLET__: `/base/test/integration/windows/wallet/index.htm`,
    },
  },

  __PROTOCOL__: "http",
  __PORT__: 8000,
  __STAGE_HOST__: "msmaster.qa.paypal.com",
  __HOST__: "test.paypal.com",
  __HOSTNAME__: "test.paypal.com",
  __SDK_HOST__: "test.paypal.com",
  __PATH__: "/sdk/js",
  __VERSION__: "1.0.55",
  __NAMESPACE__: "paypal",
  __COMPONENTS__: ["button"],
  __CORRELATION_ID__: "abc123",
  __PAYPAL_DOMAIN__: "mock://www.paypal.com",
  __PAYPAL_API_DOMAIN__: "mock://msmaster.qa.paypal.com",
};
