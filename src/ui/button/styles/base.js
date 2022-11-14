/* @flow */

import { pageStyle } from "./page";
import { buttonStyle } from "./button";
import { labelStyle } from "./labels";
import { buttonColorStyle } from "./color";

export function componentStyle(): string {
  return `
        ${pageStyle}
        ${buttonStyle}
        ${buttonColorStyle}
        ${labelStyle}
    `;
}
