/* @flow */
/* eslint unicorn/filename-case: 0, import/unambiguous: 0, import/no-commonjs: 0 */

const globals = require("./globals");

module.exports = {
  "auth-button": {
    entry: "./src/interface/button",
    setupHandler: "setupButton",
    globals,
  },
};
