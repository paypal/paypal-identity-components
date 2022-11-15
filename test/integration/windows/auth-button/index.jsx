/* @flow */
/** @jsx node */

import { node, dom } from "@krakenjs/jsx-pragmatic/src";

import { AuthButton as ButtonTemplate } from "../../../../src/ui/button";
import { getElements } from "../../tests/common";

const { action } = window.xprops.test;

const body = document.body;
if (body) {
  body.appendChild(
    (<ButtonTemplate {...window.xprops} />).render(dom({ doc: document }))
  );
}

getElements(".paypal-auth-button", document).forEach((el) => {
  el.addEventListener("click", () => {
    window.paypal
      .Auth({
        test: window.xprops.test,
        onApprove: window.xprops.onApprove,
        onCancel: window.xprops.onCancel,
      })
      .renderTo(window.parent, "body");
  });
});

if (action === "auth") {
  getElements(".paypal-auth-button", document)[0].click();
}
