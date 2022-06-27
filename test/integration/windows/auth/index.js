/* @flow */

const { action } = window.xprops.test;

if (action === "auth") {
  window.xprops.onApprove().catch(window.xprops.onError);
}
