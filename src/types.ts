import type { $Values } from "utility-types";

import { FUNDING } from "@paypal/sdk-constants/src";

type RememberedFundingType = ReadonlyArray<$Values<typeof FUNDING>>;

export type __PAYPAL_IDENTITY__ = {
  __REMEMBERED_FUNDING__: RememberedFundingType;
  __URI__: {
    __BUTTON__: string;
    __AUTH__: string;
    __CARD_FIELDS__: string;
    __MENU__: string;
    __MODAL__: string;
    __WALLET__: string;
  };
};

export type LazyExport<T> = {
  __get__: () => T;
};

export type LazyProtectedExport<T> = {
  __get__: () => T | null | undefined;
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export type NodePropsType = Record<string, any>;
export type NodeRenderer<N, O> = (arg0: N) => O;
type Primitive = string | boolean | number;
type NullablePrimitive = Primitive | null | void;
export type NullableChildType =
  | readonly ChildType[]
  | ChildNodeType
  | NullablePrimitive;
export type ChildType = ChildNodeType | Primitive | readonly ChildType[];
export type ChildNodeType = ElementNode | TextNode | ComponentNode;
export type ChildrenType = readonly ChildNodeType[];
export type ComponentFunctionType<P> = (
  arg0: P,
  arg1: ChildrenType
) => NullableChildType;

export interface TextNode {
  type: "text";
  text: string;
  constructor: (text: string) => TextNode;
  render: <T>(renderer: NodeRenderer<any, any>) => T;
}

export interface ComponentNode {
  type: "component";
  component: ComponentFunctionType<NodePropsType>;
  props: NodePropsType;
  children: readonly (ElementNode | TextNode | ComponentNode)[];
  constructor: (
    component: ComponentFunctionType<NodePropsType>,
    props: NodePropsType,
    children: readonly (ElementNode | TextNode | ComponentNode)[]
  ) => ComponentNode;
  renderComponent: (renderer: NodeRenderer<any, any>) => any;
  render: <T>(renderer: NodeRenderer<any, any>) => T;
  renderChildren: <T>(renderer: NodeRenderer<any, any>) => readonly T[];
}

export type ElementNode = {
  type: "element";
  name: string;
  props: NodePropsType;
  children: ReadonlyArray<ElementNode | TextNode | ComponentNode>;
  onRender: (<T>(arg0: T) => void) | null | undefined;
  constructor: (
    name: string,
    props: NodePropsType,
    children: ReadonlyArray<ElementNode | TextNode | ComponentNode>
  ) => ElementNode;
  render: <T>(renderer: NodeRenderer<any, any>) => T;
  renderChildren: <T>(renderer: NodeRenderer<any, any>) => readonly T[];
};
/* eslint-enable @typescript-eslint/no-explicit-any */

type OnApproveArgs = {
  intent: string;
  orderID: string;
  paymentID: string;
  payerID: string;
  paymentToken: string;
  billingToken: string;
  returnUrl: string;
};

type OnCancelArgs = {
  intent: string;
  orderID: string;
  paymentID: string;
  paymentToken: string;
  billingToken: string;
  cancelUrl: string;
};

type Xprops = {
  createOrder?: () => Promise<string>;
  getFacilitatorAccessToken?: () => string;
  apiStageHost?: string;
  stageHost?: string;
  env?: string;
  sdkMeta?: string;
  commit?: boolean;
  onApprove?: (data: OnApproveArgs) => null;
  onCancel?: (data: OnCancelArgs) => Promise<void> | void;
  onError?: (message: string) => Promise<void> | void;
};

type FundingEligibilityType = {
  bancontact: {
    eligible: boolean;
  };
  card: {
    eligible: boolean;
    isPayPalBranded: boolean;

    vendors: {
      visa: {
        eligible: boolean;
      };
      mastercard: {
        eligible: boolean;
      };
      amex: {
        eligible: boolean;
      };
      discover: {
        eligible: boolean;
      };
      hiper: {
        eligible: boolean;
      };
      elo: {
        eligible: boolean;
      };
      jcb: {
        eligible: boolean;
      };
    };
  };
  credit: {
    eligible: boolean;
  };
  sepa: {
    eligible: boolean;
  };
  eps: {
    eligible: boolean;
  };
  giropay: {
    eligible: boolean;
  };
  ideal: {
    eligible: boolean;
  };
  mybank: {
    eligible: boolean;
  };
  p24: {
    eligible: boolean;
  };
  paypal: {
    eligible: boolean;
  };
  sofort: {
    eligible: boolean;
  };
  venmo: {
    eligible: boolean;
  };
  wechatpay: {
    eligible: boolean;
  };
  oxxo: {
    eligible: boolean;
  };
  boleto: {
    eligible: boolean;
  };
  maxima: {
    eligible: boolean;
  };
  zimpler: {
    eligible: boolean;
  };
  payu: {
    eligible: boolean;
  };
  verkkopankki: {
    eligible: boolean;
  };
  blik: {
    eligible: boolean;
  };
  trustly: {
    eligible: boolean;
  };
  itau: {
    eligible: boolean;
  };
};

interface AuthArgsType extends Xprops {
  responseType: string;
}

type AuthType = (arg0: AuthArgsType) => (arg0: string) => ElementNode;

declare global {
  interface Window {
    // riskDataCollector: RiskDataCollector;
    paypal: {
      Auth: AuthType;
    };
    xprops: Xprops;
    mockDomain?: string;
    __TEST_FUNDING_ELIGIBILITY__?: FundingEligibilityType;
    __TEST_REMEMBERED_FUNDING__?: RememberedFundingType;
    __test__: Record<string, string>;
  }

  interface Navigator {
    mockUserAgent?: string;
  }
}
