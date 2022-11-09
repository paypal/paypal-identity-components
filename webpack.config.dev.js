/* @flow */
/* eslint import/no-nodejs-modules: off, import/no-default-export: off */
import type { WebpackConfig } from "@krakenjs/webpack-config-grumbler/index.flow";
import { getWebpackConfig } from "@krakenjs/webpack-config-grumbler";
import { ENV } from "@paypal/sdk-constants";

import { testGlobals } from "./test/globals";
import globals from "./globals";

const FILE_NAME = "sdk";

const PROTOCOL = "https";
const HOSTNAME = "localhost.paypal.com";
const PORT = 9001;

const WEBPACK_CONFIG_DEV: WebpackConfig = getWebpackConfig({
  entry: "./paypal.dev.js",
  filename: `${FILE_NAME}.js`,
  debug: true,
  minify: false,
  env: ENV.LOCAL,
  vars: {
    ...globals,
    ...testGlobals,
    __PROTOCOL__: PROTOCOL,
    __PAYPAL_DOMAIN__: "https://localhost.paypal.com:9001",
    __HOST__: `${HOSTNAME}:${PORT}`,
    __SDK_HOST__: `${HOSTNAME}:${PORT}`,
    __PORT__: PORT,
    __PATH__: `/${FILE_NAME}.js`,
    __PAYPAL_IDENTITY__: {
      ...testGlobals.__PAYPAL_IDENTITY__,
      __URI__: {
        __AUTH__: `/demo/dev/auth.htm`,
        __BUTTON__: `/demo/dev/auth-button.htm`,
      },
    },
  },
});

const WEBPACK_CONFIG_BUTTON_RENDER: WebpackConfig = getWebpackConfig({
  context: __dirname,
  entry: "./src/ui/button",
  filename: "button.js",
  modulename: "button",
  debug: true,
  minify: false,
  web: false,
  libraryTarget: "global",
});

const WEBPACK_CONFIG_JSX_PRAGMATIC: WebpackConfig = getWebpackConfig({
  context: __dirname,
  entry: "jsx-pragmatic",
  filename: "jsx-pragmatic.js",
  modulename: "jsx",
  debug: true,
  minify: false,
  libraryTarget: "global",
});

export default [
  WEBPACK_CONFIG_DEV,
  WEBPACK_CONFIG_BUTTON_RENDER,
  WEBPACK_CONFIG_JSX_PRAGMATIC,
];
