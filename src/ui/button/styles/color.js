/* @flow */

import { BUTTON_COLOR, CLASS, TEXT_COLOR } from '../../../constants';

export const buttonColorStyle = `


    .${ CLASS.BUTTON }.${ CLASS.TEXT_COLOR }-${ TEXT_COLOR.BLACK } {
        color: #2C2E2F;
    }

    .${ CLASS.BUTTON }.${ CLASS.TEXT_COLOR }-${ TEXT_COLOR.WHITE } {
        color: #fff;
    }

    .${ CLASS.BUTTON }.${ CLASS.COLOR }-${ BUTTON_COLOR.BLUE } {
        background: #009cde;
    }

    .${ CLASS.BUTTON }.${ CLASS.COLOR }-${ BUTTON_COLOR.BLUE }:hover {
        filter: brightness(0.95);
    }

    .${ CLASS.BUTTON }.${ CLASS.COLOR }-${ BUTTON_COLOR.BLUE }:focus {
        outline: none;
        box-shadow: 0px 0px 1px 3px #0c67ff inset;
    }
`;
