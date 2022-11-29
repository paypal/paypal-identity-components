module.exports = {
  extends: "@krakenjs/eslint-config-grumbler/eslintrc-typescript",
  globals: {
    Promise: false,
    __PAYPAL_IDENTITY__: true,
    __sdk__: true,
    __LOCALE__: true,
    __CLIENT_ID__: true,
    __MERCHANT_ID__: true,
    __INTENT__: true,
    __COMMIT__: true,
    __VAULT__: true,
    __PORT__: true,
    __STAGE_HOST__: true,
    __HOST__: true,
    __PATH__: true,
    __COMPONENTS__: true,
    __FUNDING_ELIGIBILITY__: true,
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
  ignorePatterns: [".eslintrc.js"],

  rules: {
    /**************************************************/
    // Easy fixes that can be fixed with just Types
    // use import type when all imports are types
    /**************************************************/
    // impport type should be used since its all types
    "@typescript-eslint/consistent-type-imports": "off",
    // describe your ts-expect-errors
    "@typescript-eslint/ban-ts-comment": "off",
    // no type assertion needed here
    "@typescript-eslint/no-unnecessary-type-assertion": "off",
    // favor type class over interface
    "@typescript-eslint/consistent-type-definitions": "off",
    // favor string[] over Array<string> for consistency
    "@typescript-eslint/array-type": "off",
    // favor readonly string[] over ReadonlyArray<string> for consistency
    "@typescript-eslint/array-type": "off",
    // any for error in catch clause
    "@typescript-eslint/no-implicit-any-catch": "off",
    // use 'any' type
    "@typescript-eslint/no-explicit-any": "off",

    /**************************************************/
    // Easy fixes that do require some changes. This are things like changing access to possibly null objects
    // they do technically modify runtime but should be safer than what we have so as long as we didn't rely
    // on the looser behavior
    /**************************************************/
    // `foo.?bar` is preferred over foo && `foo.bar`
    "@typescript-eslint/prefer-optional-chain": "off",
    // use a ! assertion to assert its not null
    "@typescript-eslint/non-nullable-type-assertion-style": "off",
    // prefer string.includes vs indexOf
    "@typescript-eslint/prefer-includes": "off",
    // default params should be last
    "@typescript-eslint/default-param-last": "off",
    // prefer string starts with
    "@typescript-eslint/prefer-string-starts-ends-with": "off",
    // prefer nullish coalescing (??) over ||
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    // use regex exec method instead
    "@typescript-eslint/prefer-regexp-exec": "off",
    // for of instead of for loop
    "@typescript-eslint/prefer-for-of": "off",
    // consistent type signatures
    "@typescript-eslint/consistent-type-assertions": "off",
    // use iterator methods (eg Array.forEach) over loops
    "@typescript-eslint/no-loop-func": "off",
    // use rest params instead of 'arguments'
    "prefer-rest-params": "off",
    // use spread operator instead of Object.assign
    "prefer-spread": "off",

    /**************************************************/
    // Hard Fixes - Most of these are related to our libraries not being typescript
    /**************************************************/
    // cant assign an any
    "@typescript-eslint/no-unsafe-assignment": "off",
    // cant call an any
    "@typescript-eslint/no-unsafe-call": "off",
    // returned an any type
    "@typescript-eslint/no-unsafe-return": "off",

    /**************************************************/
    // Misc
    /**************************************************/
    // using null as a type
    "@typescript-eslint/ban-types": "off",
    // void return type
    "@typescript-eslint/no-confusing-void-expression": "off",
    // functions that return promises should be async
    "@typescript-eslint/promise-function-async": "off",
    // awaited a return of non async value
    "@typescript-eslint/return-await": "off",
    // stringified an object so will be [object Object]
    "@typescript-eslint/no-base-to-string": "off",
    // awaiting a non promise/thenable
    "@typescript-eslint/await-thenable": "off",
    // Error objects should be thrown
    "@typescript-eslint/no-throw-literal": "off",
    // any type in a union makes it always any
    "@typescript-eslint/no-redundant-type-constituents": "off",
    // no floating promises without at least a catch
    "@typescript-eslint/no-floating-promises": "off",
    // different types with +
    "@typescript-eslint/restrict-plus-operands": "off",
    // no require imports
    "@typescript-eslint/no-require-imports": "off",
    // template string implicitly calls toString so this might cause [object Object] in a the template
    "@typescript-eslint/restrict-template-expressions": "off",
    // no var require
    "@typescript-eslint/no-var-requires": "off",
    // https://github.com/nodesecurity/eslint-plugin-security#detect-object-injection
    // deleting dynamic key
    "@typescript-eslint/no-dynamic-delete": "off",
    // promise in if statement or logical statement in general
    "@typescript-eslint/no-misused-promises": "off",
    // security rules
    "security/detect-object-injection": "off",
  },
};
