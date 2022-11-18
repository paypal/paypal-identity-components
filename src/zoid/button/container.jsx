/* @flow */
/** @jsx node */

import { destroyElement, toCSS } from "@krakenjs/belter/src";
import { node, dom } from "@krakenjs/jsx-pragmatic/src";
import { EVENT, type RenderOptionsType } from "@krakenjs/zoid/src";

import { type ButtonProps } from "../../ui/button/props";

const CLASS = {
  VISIBLE: "visible",
  INVISIBLE: "invisible",
  COMPONENT_FRAME: "component-frame",
  PRERENDER_FRAME: "prerender-frame",
};

export function containerTemplate({
  uid,
  props,
  tag,
  context,
  frame,
  prerenderFrame,
  doc,
  container,
  event,
}: RenderOptionsType<ButtonProps>): ?HTMLElement {
  if (!frame || !prerenderFrame) {
    return;
  }

  if (container && container.tagName.toLowerCase() === "button") {
    throw new Error(`Do not render the PayPal button into a button element`);
  }

  frame.classList.add(CLASS.COMPONENT_FRAME);
  prerenderFrame.classList.add(CLASS.PRERENDER_FRAME);

  frame.classList.add(CLASS.INVISIBLE);
  prerenderFrame.classList.add(CLASS.VISIBLE);

  event.on(EVENT.RENDERED, () => {
    prerenderFrame.classList.remove(CLASS.VISIBLE);
    prerenderFrame.classList.add(CLASS.INVISIBLE);

    frame.classList.remove(CLASS.INVISIBLE);
    frame.classList.add(CLASS.VISIBLE);

    setTimeout(() => {
      destroyElement(prerenderFrame);
    }, 1000);
  });

  const { style } = props;
  const { label } = style;

  const setupAutoResize = (el) => {
    event.on(EVENT.RESIZE, ({ width: newWidth, height: newHeight }) => {
      if (typeof newWidth === "number") {
        el.style.width = toCSS(newWidth);
      }

      if (typeof newHeight === "number") {
        el.style.height = toCSS(newHeight);
      }
    });
  };

  const element = (
    <div
      id={uid}
      onRender={setupAutoResize}
      class={`${tag} ${tag}-context-${context} ${tag}-label-${
        label || "login"
      }`}
    >
      <style>
        {`
                    #${uid} {
                        position: relative;
                        display: inline-block;
                        width: 100%;
                        min-height: 35px;
                        min-width: 200px;
                        max-width: 750px;
                        font-size: 0;
                    }

                    #${uid} > iframe {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                    }

                    #${uid} > iframe.${CLASS.COMPONENT_FRAME} {
                        z-index: 100;
                    }

                    #${uid} > iframe.${CLASS.PRERENDER_FRAME} {
                        transition: opacity .2s linear;
                        z-index: 200;
                    }

                    #${uid} > iframe.${CLASS.VISIBLE} {
                        opacity: 1;
                    }

                    #${uid} > iframe.${CLASS.INVISIBLE} {
                        opacity: 0;
                        pointer-events: none;
                    }
                `}
      </style>

      <node el={frame} />
      <node el={prerenderFrame} />
    </div>
  ).render(dom({ doc }));

  return element;
}
