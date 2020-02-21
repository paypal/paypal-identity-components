/* @flow */

import { ENV } from '@paypal/sdk-constants/src';
import { LOGO_CLASS } from '@paypal/sdk-logos/src';

import { CLASS } from '../../../constants';

export const buttonStyle = `

    .${ CLASS.CONTAINER } {
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
        width: 100%;
        height: 100%;
        box-sizing: border-box;
    }

    .${ CLASS.BUTTON } {
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

    .${ CLASS.BUTTON } * {
        cursor: pointer;
    }

    .${ CLASS.CONTAINER }.${ CLASS.ENV }-${ ENV.TEST } .${ CLASS.TEXT } {
        font-family: Arial !important;
        background: rgba(0, 0, 0, 0.5) !important;
        color: transparent  !important;
        text-shadow: none  !important;
    }

    .${ LOGO_CLASS.LOGO } {
        padding: 0;
        display: inline-block;
        background: none;
        border: none;
        width: auto;
    }

    .${ CLASS.TEXT }, .${ CLASS.SPACE } {
        display: inline-block;
        white-space: pre;
    }

    .${ CLASS.BUTTON } > .${ CLASS.BUTTON_LABEL } {
        height: 55%;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }

    .${ CLASS.BUTTON } > .${ CLASS.BUTTON_LABEL } > * {
        vertical-align: top;
        height: 100%;
        text-align: left;
    }
`;
