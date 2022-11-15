/* @flow */

import { BUTTON_COLOR, CLASS, TEXT_COLOR } from "../../../constants";

export const buttonColorStyle = `


    .${CLASS.BUTTON}.${CLASS.TEXT_COLOR}-${TEXT_COLOR.BLACK} {
        color: #2C2E2F;
    }

    .${CLASS.BUTTON}.${CLASS.TEXT_COLOR}-${TEXT_COLOR.WHITE} {
        color: #fff;
    }

    .${CLASS.BUTTON}.${CLASS.COLOR}-${BUTTON_COLOR.GOLD} {
        background: #ffc439;
        color: #111;
    }
    .${CLASS.BUTTON}.${CLASS.COLOR}-${BUTTON_COLOR.GOLD}:hover {
        filter: brightness(0.95);

    }
    .${CLASS.BUTTON}.${CLASS.COLOR}-${BUTTON_COLOR.GOLD}:focus {
        outline: none;
        box-shadow: 0px 0px 1px 3px #0c67ff inset;
    }


    .${CLASS.BUTTON}.${CLASS.COLOR}-${BUTTON_COLOR.BLUE} {
        background: #0070BA;
    }

    .${CLASS.BUTTON}.${CLASS.COLOR}-${BUTTON_COLOR.BLUE}:hover {
        filter: brightness(0.95);
    }

    .${CLASS.BUTTON}.${CLASS.COLOR}-${BUTTON_COLOR.BLUE}:focus {
        outline: none;
        box-shadow: 0px 0px 1px 3px #0c67ff inset;
    }

    .${CLASS.BUTTON}.${CLASS.COLOR}-${BUTTON_COLOR.DARKBLUE} {
        background: #003087;
    }
    .${CLASS.BUTTON}.${CLASS.COLOR}-${BUTTON_COLOR.DARKBLUE}:hover {
        filter: brightness(1.2);
    }
    .${CLASS.BUTTON}.${CLASS.COLOR}-${BUTTON_COLOR.DARKBLUE}:focus {
        outline: none;
        box-shadow: 0px 0px 1px 3px #0c67ff inset;
    }

    .${CLASS.BUTTON}.${CLASS.COLOR}-${BUTTON_COLOR.SILVER} {
        background: #eeeeee;
        color: #111;
    }
    .${CLASS.BUTTON}.${CLASS.COLOR}-${BUTTON_COLOR.SILVER}:hover {
        filter: brightness(1.9);
        background: #000020;
    }
    .${CLASS.BUTTON}.${CLASS.COLOR}-${BUTTON_COLOR.SILVER}:focus {
        outline: none;
        background: #000020;
        box-shadow: 0px 0px 1px 3px #0c67ff inset;
    }
`;
