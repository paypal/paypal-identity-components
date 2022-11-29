/** @jsx node */

import { node } from "@krakenjs/jsx-pragmatic/src"; // import { popup, supportsPopups, writeElementToWindow } from '@krakenjs/belter/src';

import type { CrossDomainWindowType } from "@krakenjs/cross-domain-utils/dist/esm";
import { VenmoSpinnerPage } from "@paypal/common-components/src/ui";
import type { ZoidProps } from "@krakenjs/zoid/src";

// import { DEFAULT_POPUP_SIZE } from '../auth';
import { AuthButton } from "../../ui";
import type { ButtonProps } from "../../ui/button/props";
import "../../ui/button/props"; // import { CLASS } from '../../constants';
import type { ChildType } from "../../types";

type PrerenderedButtonProps = {
  nonce: string | null | undefined;
  props: ZoidProps<ButtonProps>;
  onRenderAuth: (arg0: {
    win?: CrossDomainWindowType | null | undefined;
  }) => void;
};

export function PrerenderedButton({
  nonce,
  props,
}: PrerenderedButtonProps): ChildType {
  return (
    <html>
      <body>
        {}
        <AuthButton {...props} />
        <VenmoSpinnerPage nonce={nonce} />
      </body>
    </html>
  );
}
