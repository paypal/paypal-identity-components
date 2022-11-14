/* @flow */

import { CLASS } from "../../../constants";

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

    .${CLASS.HIDDEN} {
        position: absolute;
        visibility: hidden;
    }
    .${CLASS.SPINNER_COLOR} {
        background: white;
    }

    @media screen and (max-width: 400px) {
        .${CLASS.BUTTON_LABEL} {
          width: 100%;
        }
      }
  
      /* Media query for desktop viewport */
      @media screen and (min-width: 400px) {
        .${CLASS.BUTTON_LABEL} {
          max-width: 250px;
          font-size: 14px;
          margin-top: 27px;
        }
      }

    @media only screen and (min-width: 0px) {
        body {
           font-size: 12px;
        }
    }

    @media only screen and (min-width: 300px) {
        body {
            font-size: 16px;
        }
    }

    @media only screen and (min-width: 500px) {
        body {
            font-size: 18px;
        }
    }

    @media only screen and (min-width: 800px) {
        body {
            font-size: 22px;
        }
    }

    @media only screen and (min-width: 800px) {
        .${CLASS.BUTTON} > .${CLASS.BUTTON_LABEL} {
            height: 25px;
            font-size: 22px;
        }
    }
    @media only screen and (min-width: 0px) {
        .${CLASS.BUTTON} > .${CLASS.BUTTON_LABEL} {
            height: 21px;
            font-size: 12px;
        }
    }

    @media only screen and (min-width: 300px) {
        .${CLASS.BUTTON} > .${CLASS.BUTTON_LABEL} {
            height: 23px;
            font-size: 16px;
        }
    }

    @media only screen and (min-width: 500px) {
        .${CLASS.BUTTON} > .${CLASS.BUTTON_LABEL} {
            height: 25px;
            font-size: 18px;
        }
    }
`;
