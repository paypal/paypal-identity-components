declare module "@infra/paypalize";
declare module "@krakenjs/belter";
declare module "@krakenjs/belter/src";
declare module "@krakenjs/grumbler-scripts";
declare module "@krakenjs/karma-config-grumbler";
declare module "@krakenjs/jsx-pragmatic";
declare module "@krakenjs/jsx-pragmatic/src";
declare module "@krakenjs/sync-browser-mocks/src/xhr";
declare module "@krakenjs/webpack-config-grumbler";
declare module "@krakenjs/zoid/src";
declare module "@paypal/checkout-components/dist/button";
declare module "@paypal/checkout-components/src/types";
declare module "@paypal/common-components";
declare module "@paypal/common-components/src";
declare module "@paypal/common-components/src/ui";
declare module "@paypal/funding-components/src";
declare module "@paypal/sdk-client";
declare module "@paypal/sdk-client/src";
declare module "@paypal/sdk-logos";
declare module "@paypal/sdk-logos/src";
declare module "@paypal/smart-payment-buttons/dist/smart-native-fallback";
declare module "@paypal/smart-payment-buttons/dist/smart-native-popup";
declare module "@paypal/sdk-constants";
declare module "@paypal/sdk-constants/src";
declare module "@paypal/sdk-constants/src/types";
declare module "@paypalcorp/instance-location";
declare module "@paypalcorp/mayfly";
declare module "@paypalcorp/risk-data-transport";
declare module "@paypalcorp/sdk-server-utils";
declare module "app-shims";
declare module "beaver-logger-paypal";
declare module "cal";
declare module "cow-shortstop";
declare module "environment-paypal";
declare module "experimentation-paypal";
declare module "jsx-pragmatic";
declare module "keymakerclientapi";
declare module "kraken-js";
declare module "servicecore";
declare module "topos";
declare module "webpack-dev-middleware";
declare module "window-mock";
declare module "xo-gears";

declare module "@infra/remoteconfig" {
  type RCPropChangeDetails = {
    root: string;
    key: string;
    value: string;
  };

  type Remoteconfig = {
    events: {
      on: (
        type: string,
        listener: (details: RCPropChangeDetails) => void
      ) => void;
    };
  };

  const remoteconfig: Remoteconfig;

  export default remoteconfig;
}

declare module "shush" {
  type JSONValue =
    | string
    | number
    | boolean
    | Record<string, JSONValue>
    | Array<JSONValue>;

  export default function shush(path: string): Record<string, JSONValue>;
}

declare module "strict-merge" {
  export const TYPE = {
    BOOLEAN: "boolean",
    STRING: "string",
    NUMBER: "number",
    OBJECT: "object",
    ARRAY: "array",
    NULL: "null",
    UNDEFINED: "undefined",
  } as const;

  type TUnionToIntersection<U> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export function strictMerge<First, Second extends First>(
    first: Record<string, First>,
    second: Record<string, Second>,
    merger?: (
      a: Record<string, T>,
      b: Record<string, T>,
      type: TYPE,
      value: T
    ) => T
  ): TUnionToIntersection<T[number]>;
}

declare module "@krakenjs/grabthar";
declare module "@krakenjs/grabthar" {
  export async function getVersionFromNodeModules(args): Promise<{
    nodeModulesPath: string;
    modulePath: string;
    version: string;
    dependencies: Record<
      string,
      {
        version: string;
        path: string;
      }
    >;
  }>;
}

declare namespace JSX {
  // eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
  interface IntrinsicElements {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [elemName: string]: any;
  }
}
