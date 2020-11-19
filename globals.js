/* eslint import/no-commonjs: off, flowtype/require-valid-file-annotation: off, flowtype/require-return-type: off */

const postRobotGlobals = require('post-robot/globals');
const zoidGlobals = require('zoid/globals');

module.exports = {
    __ZOID__: zoidGlobals.__ZOID__,
    
    __POST_ROBOT__: {
        ...postRobotGlobals.__POST_ROBOT__,
        __IE_POPUP_SUPPORT__: false
    },

    __PAYPAL_IDENTITY__: {
        __URI__: {
            __AUTH__:   '/connect',
            __BUTTON__: '/apps/connectButton'
        }
    }
};
