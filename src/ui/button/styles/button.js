/* @flow */

import { ENV } from "@paypal/sdk-constants/src";
import { LOGO_CLASS } from "@paypal/sdk-logos/src";

import { CLASS, BUTTON_SHAPE } from "../../../constants";

export const buttonStyle = `

    .${CLASS.CONTAINER} {
        display: block;
        white-space: nowrap;
        margin: 0;
        background: 0;
        border: 0;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        text-transform: none;
        font-weight: 500;
        font-smoothing: antialiased;
        z-index: 0;
        min-width: 200px;
      
        height: 100%;
        box-sizing: border-box;

     }

    .${CLASS.BUTTON} {
        border: 1px solid transparent;
        border-radius: 3px;
        position: relative;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        border: none;
        vertical-align: top;
        cursor: pointer;
        overflow: hidden;
    }

    .${CLASS.BUTTON} * {
        cursor: pointer;
    }

    .${CLASS.CONTAINER}.${CLASS.ENV}-${ENV.TEST} .${CLASS.TEXT} {
        font-family: Arial !important;
        background: rgba(0, 0, 0, 0.5) !important;
        color: transparent  !important;
        text-shadow: none  !important;
    }

    .${LOGO_CLASS.LOGO} {
        padding: 0px;
        display: inline-block;
        background: none;
        border: none;
        width: auto;
    }

    .${CLASS.TEXT}, .${CLASS.SPACE} {
        display: inline-block;
        white-space: pre;
        padding-left:7px;
    }

    .${CLASS.BUTTON} > .${CLASS.BUTTON_LABEL} {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }

    .${CLASS.BUTTON} > .${CLASS.BUTTON_LABEL} > * {
        vertical-align: middle;
        height: 100%;
        text-align: left;
    }
       
    .${CLASS.SHAPE}-${BUTTON_SHAPE.PILL}  {
        border-radius: 50px;
    }
    .${CLASS.CHECKOUTOVERLAY} > .${CLASS.CHECKOUTMODAL} > .${CLASS.CHECKOUTLOGO} {
        margin-bottom: 0px; !important;
    }
`;
