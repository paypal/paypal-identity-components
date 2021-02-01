/* @flow */

import { CLASS } from '../../../constants';

export const pageStyle = `
    html, body {
        padding: 0;
        margin: 0;
        width: 100%;
        overflow: hidden;
        text-align: center;
    }

    body {
        display: inline-block;
        vertical-align: top;
        border-collapse: collapse;
    }

    * {
        touch-callout: none;
        user-select: none;
        cursor: default;
        box-sizing: border-box;
    }

    .${ CLASS.HIDDEN } {
        position: absolute;
        visibility: hidden;
    }

    @media only screen and (min-width: 0px) {
        body {
            height: 30px;
            font-size: 12px;
        }
    }

    @media only screen and (min-width: 300px) {
        body {
            height: 40px;
            font-size: 16px;
        }
    }

    @media only screen and (min-width: 500px) {
        body {
            height: 50px;
            font-size: 18px;
        }
    }

    @media only screen and (min-width: 800px) {
        body {
            height: 60px;
            font-size: 22px;
        }
    }
`;
