/* @flow */
/* eslint import/no-nodejs-modules: off, import/no-default-export: off */

import type { WebpackConfig } from "@krakenjs/webpack-config-grumbler/index.flow";
import { getWebpackConfig } from "@krakenjs/webpack-config-grumbler";

import { testGlobals } from "./test/globals";
import globals from "./globals";

const CHECK_SIZE_CONFIG: WebpackConfig = getWebpackConfig({
  filename: "size",
  entry: "./src/interface/button.js",
  minify: false,
  sourcemaps: false,
  analyze: true,
  vars: {
    ...globals,
    ...testGlobals,
  },
});

const CHECK_SIZE_MIN_CONFIG: WebpackConfig = getWebpackConfig({
  filename: "size",
  entry: "./src/interface/button.js",
  minify: true,
  sourcemaps: false,
  analyze: true,
  vars: {
    ...globals,
    ...testGlobals,
  },
});

export default [CHECK_SIZE_CONFIG, CHECK_SIZE_MIN_CONFIG];
