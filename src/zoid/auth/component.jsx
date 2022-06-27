/* @flow */
/** @jsx node */
/* eslint max-lines: 0 */

import { node, dom } from "@krakenjs/jsx-pragmatic/src";
import {
  getPayPalDomainRegex,
  getLogger,
  getEnv,
  getClientID,
  getSDKMeta,
  getCSPNonce,
  getPayPalDomain,
  getSessionID,
} from "@paypal/sdk-client/src";
import { create, CONTEXT, type ZoidComponent } from "@krakenjs/zoid/src";
import { isDevice, supportsPopups, inlineMemoize } from "@krakenjs/belter/src";
import { Overlay, SpinnerPage } from "@paypal/common-components/src";

import { validateResponseType } from "../button/util";

import { type AuthPropsType } from "./props";
import { DEFAULT_POPUP_SIZE } from "./config";

export type AuthComponent = ZoidComponent<AuthPropsType>;

export function getAuthComponent(): ZoidComponent<AuthPropsType> {
  return inlineMemoize(getAuthComponent, () => {
    const component = create({
      tag: "paypal-auth",
      url: () => `${getPayPalDomain()}${__PAYPAL_IDENTITY__.__URI__.__AUTH__}`,

      attributes: {
        iframe: {
          scrolling: "yes",
        },
      },

      defaultContext: supportsPopups() ? CONTEXT.POPUP : CONTEXT.IFRAME,

      domain: getPayPalDomainRegex(),

      logger: getLogger(),

      prerenderTemplate: ({ doc, props }) => {
        return (<SpinnerPage nonce={props.nonce} />).render(dom({ doc }));
      },

      containerTemplate: ({
        context,
        close,
        focus,
        doc,
        event,
        frame,
        prerenderFrame,
        props,
      }) => {
        const { nonce } = props;
        return (
          <Overlay
            context={context}
            close={close}
            focus={focus}
            event={event}
            frame={frame}
            prerenderFrame={prerenderFrame}
            content={{}}
            nonce={nonce}
          />
        ).render(dom({ doc }));
      },

      props: {
        ctxId: {
          type: "string",
          queryParam: true,
          required: false,
        },

        clientID: {
          type: "string",
          queryParam: "client_id",
          value: () => getClientID(),
          required: true,
        },

        sessionID: {
          type: "string",
          value: getSessionID,
          queryParam: false,
        },

        authSessionID: {
          type: "string",
          queryParam: false,
          required: false,
        },
        scope: {
          type: "string",
          queryParam: true,
          required: false,
        },
        redirect_uri: {
          type: "string",
          queryParam: true,
          required: false,
        },
        env: {
          type: "string",
          queryParam: true,
          value: getEnv,
        },
        sdkMeta: {
          type: "string",
          queryParam: true,
          value: getSDKMeta,
        },

        nonce: {
          type: "string",
          queryParam: true,
          value: () => getCSPNonce(),
        },

        responseType: {
          type: "string",
          queryParam: true,
          required: true,
          validate: ({ value }) => {
            return validateResponseType(value);
          },
        },
        // we will use this parameters in te next release when we have locale as query parameter
        // csp:{
        //     type:     'object',
        //     required: false,
        //     queryParam: true,
        //     value: getCSPNonce()
        // },

        // locale: {
        //     type:          'object',
        //     queryParam:    'locale.x',
        //     allowDelegate: true,
        //     queryValue:    ({ value }) => `${ value.lang }_${ value.country }`,
        //     value:         getLocale
        // },

        onApprove: {
          type: "function",
          required: false,
        },

        onCancel: {
          type: "function",
          required: false,
        },

        test: {
          type: "object",
          default: () => window.__test__ || { action: "auth" },
        },
      },

      dimensions: isDevice()
        ? { width: "100%", height: `${DEFAULT_POPUP_SIZE.HEIGHT}px` }
        : {
            width: `${DEFAULT_POPUP_SIZE.WIDTH}px`,
            height: `${DEFAULT_POPUP_SIZE.HEIGHT}px`,
          },
    });

    return component;
  });
}
