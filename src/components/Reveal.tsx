import { useMemo, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

type Props = { as?: keyof HTMLElementTagNameMap; className?: string; id?: string; delay?: number; children: ReactNode };

/** Fades content up once as it enters the viewport. Content is visible without JS; this only adds motion. */
export function Reveal({ as = "div", className, id, delay = 0, children }: Props) {
  const reduce = useReducedMotion();
  const M = useMemo(() => motion.create(as), [as]);
  return (
    <M
      className={className}
      id={id}
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </M>
  );
}