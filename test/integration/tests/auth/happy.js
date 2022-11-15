/* @flow */
/* eslint max-lines: 0 */

import { wrapPromise } from "@krakenjs/belter/src";

import {
  runOnClick,
  createTestContainer,
  destroyTestContainer,
} from "../common";

describe(`paypal auth component happy path`, () => {
  beforeEach(() => {
    createTestContainer();
  });

  afterEach(() => {
    destroyTestContainer();
  });

  it("should render auth, then complete the payment", () => {
    return wrapPromise(({ expect, error }) => {
      return runOnClick(() => {
        return window.paypal
          .Auth({
            responseType: "code",
            onApprove: expect("onApprove"),
            onCancel: error("onCancel"),
          })
          .render("body");
      });
    });
  });
});
