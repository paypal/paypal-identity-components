/** @jsx node */

import { node } from "@krakenjs/jsx-pragmatic/src";

import { CLASS } from "../constants";
import type { ChildrenType, ChildType } from "../types";

export function Text(
  {
    optional,
    className = [],
  }: {
    optional?: boolean;
    className?: readonly string[];
  },
  children: ChildrenType
): ChildType {
  return (
    <span class={[CLASS.TEXT, ...className].join(" ")} optional={optional}>
      {children}
    </span>
  );
}

export function Space(): ChildType {
  return <span class={[CLASS.SPACE].join(" ")}> </span>;
}
