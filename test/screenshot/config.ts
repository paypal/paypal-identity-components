import type { $Values } from "utility-types";
import { FUNDING } from "@paypal/sdk-constants";

import { BUTTON_LABEL, BUTTON_COLOR, BUTTON_SHAPE } from "../../src/constants";

const SUPPORTED_FUNDING_SOURCES: ReadonlyArray<$Values<typeof FUNDING>> = [
  FUNDING.PAYPAL,
  FUNDING.PAYPAL,
];

const RESPONSIVE_WIDTHS = [144, 222, 465, 670];

type ButtonConfig = {
  only?: boolean;
  filename?: string;
  userAgent?: string;
  container?: {
    width: number;
  };
  button?: {
    scopes: ReadonlyArray<string>;
    locale?: string;
    responseType: string;
    style?: {
      color?: string;
      shape?: string;
      label?: string;
    };
  };
};

export const buttonConfigs: Array<ButtonConfig> = [];

const DEFAULT_OAUTH_PROPS = {
  scopes: ["email"],
  responseType: "code",
  style: {
    color: "blue",
    shape: "pill",
  },
};

for (const fundingSource of SUPPORTED_FUNDING_SOURCES) {
  buttonConfigs.push({
    button: {
      // @ts-expect-error shouldn't the spread come first? TS thinks so and I agree
      fundingSource,
      // style: {
      // },
      ...DEFAULT_OAUTH_PROPS,
    },
  });
}

for (const label of [BUTTON_LABEL.CONNECT]) {
  buttonConfigs.push({
    button: {
      // @ts-expect-error shouldn't the spread come first? TS thinks so and I agree
      style: {
        // default  color: 'blue',
        label,
      },
      ...DEFAULT_OAUTH_PROPS,
    },
  });
}

for (const width of RESPONSIVE_WIDTHS) {
  buttonConfigs.push({
    container: {
      width,
    },
    button: {
      // @ts-expect-error shouldn't the spread come first? TS thinks so and I agree
      style: {},
      ...DEFAULT_OAUTH_PROPS,
    },
  });
}

for (const color of [BUTTON_COLOR.BLUE]) {
  buttonConfigs.push({
    button: {
      // @ts-expect-error shouldn't the spread come first? TS thinks so and I agree
      style: {
        color,
      },
      ...DEFAULT_OAUTH_PROPS,
    },
  });
}

for (const shape of [BUTTON_SHAPE.RECT, BUTTON_SHAPE.PILL]) {
  buttonConfigs.push({
    button: {
      // @ts-expect-error shouldn't the spread come first? TS thinks so and I agree
      style: {
        shape,
      },
      ...DEFAULT_OAUTH_PROPS,
    },
  });
}
