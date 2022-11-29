const globals = require("./globals");

module.exports = {
  "auth-button": {
    entry: "./src/interface/button",
    setupHandler: "setupButton",
    globals,
  },
};
