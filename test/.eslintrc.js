/* @flow */

module.exports = {
  extends: "../.eslintrc.js",

  globals: {
    document: true,
    performance: true,
    assert: true,
    beforeAll: true,
    afterAll: true,
    test: true,
    jest: true,
    page: true,
    browserlist: true,
  },

  rules: {
    "compat/compat": "off",
    "max-lines": "off",
    "no-restricted-globals": "off",
    "promise/no-native": "off",
    "key-spacing": "off",
    "import/no-commonjs": "off",
  },
};
