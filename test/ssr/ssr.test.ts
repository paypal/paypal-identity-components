import { getWebpackConfig } from "@krakenjs/webpack-config-grumbler";
import { html, type ElementNode } from "@krakenjs/jsx-pragmatic";

import { webpackCompileToString } from "../screenshot/lib/compile";

jest.setTimeout(120000);

type ButtonScript = {
  AuthButton: (arg0: Record<string, any>) => typeof ElementNode;
  DEFAULT_PROPS: Record<string, any>;
};

const cache: Record<string, ButtonScript> = {};

async function getButtonScript(): Promise<ButtonScript> {
  const config = {
    entry: "./src/ui/button",
    libraryTarget: "commonjs",
    web: false,
  };

  const cacheKey = JSON.stringify(config);

  if (cache[cacheKey]) {
    return cache[cacheKey];
  }

  const script = await webpackCompileToString(getWebpackConfig(config));

  // @ts-expect-error exports object is initialized without required properties
  const exports: ButtonScript = {};
  // eslint-disable-next-line security/detect-eval-with-expression
  eval(script);

  if (typeof exports.AuthButton !== "function") {
    throw new TypeError(`Expected componentTemplate to be a function`);
  }

  cache[cacheKey] = exports;

  return exports;
}

test(`Button should render with ssr, with minimal options`, async () => {
  const { AuthButton } = await getButtonScript();

  const buttonHTML = AuthButton({
    locale: {
      country: "US",
      lang: "en",
    },
    platform: "desktop",
    sessionID: "xyz",
    authButtonSessionID: "abc",
    style: {
      color: "blue",
      shape: "pill",
    },
  }).render(html());

  if (!buttonHTML || typeof buttonHTML !== "string") {
    throw new Error(`Expected html to be a non-empty string`);
  }
});

test(`Button should fail to render with ssr, with invalid style option`, async () => {
  const { AuthButton } = await getButtonScript();

  let expectedErr;

  try {
    AuthButton({
      style: {
        color: "red",
      },
      locale: {
        country: "US",
        lang: "en",
      },
      platform: "desktop",
      sessionID: "xyz",
      authButtonSessionID: "abc",
    }).render(html());
  } catch (err) {
    expectedErr = err;
  }

  if (!expectedErr) {
    throw new Error(`Expected button render to error out`);
  }
});

test(`Button should fail to render with ssr, with invalid locale`, async () => {
  const { AuthButton } = await getButtonScript();

  let expectedErr;

  try {
    AuthButton({
      locale: {
        country: "FR",
        lang: "de",
      },
      platform: "desktop",
      sessionID: "xyz",
      authButtonSessionID: "abc",
    }).render(html());
  } catch (err) {
    expectedErr = err;
  }

  if (!expectedErr) {
    throw new Error(`Expected button render to error out`);
  }
});

test(`Button renderer should export DEFAULT_PROPS`, async () => {
  const { DEFAULT_PROPS } = await getButtonScript();

  if (!DEFAULT_PROPS) {
    throw new Error(`Expected DEFAULT_PROPS to be exported`);
  }

  if (!DEFAULT_PROPS.hasOwnProperty("ENV")) {
    throw new Error(`Expected DEFAULT_PROPS.ENV to be exported`);
  }
});
