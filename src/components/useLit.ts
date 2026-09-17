import { useInView } from "motion/react";
import type { RefObject } from "react";

/** True once the element has scrolled into the top part of the viewport. Nodes on the spine stay lit afterwards. */
export function useLit(ref: RefObject<Element | null>, margin: `${number}px 0px ${number}% 0px` = "0px 0px -40% 0px") {
  return useInView(ref, { once: true, margin });
}