import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

/** A system as a chain of steps. Steps light up in sequence; a live system keeps a marker moving through it. */
export function Flow({ steps, live }: { steps: string[]; live?: boolean }) {
  const ref = useRef<HTMLOListElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reduce = useReducedMotion();
  const [hot, setHot] = useState(-1);

  useEffect(() => {
    if (!live || !inView || reduce) return;
    let i = 0;
    const id = setInterval(() => { i = (i + 1) % (steps.length + 2); setHot(i < steps.length ? i : -1); }, 700);
    return () => clearInterval(id);
  }, [live, inView, reduce, steps.length]);

  return (
    <ol ref={ref} className="flow mono" aria-label="How the system works">
      {steps.map((s, i) => (
        <motion.li
          key={s}
          className={i === hot ? "is-hot" : ""}
          initial={reduce ? false : { color: "#6A6A6A" }}
          animate={inView ? { color: "#111111" } : undefined}
          transition={{ delay: i * 0.14, duration: 0.5 }}
        >
          {s}
        </motion.li>
      ))}
    </ol>
  );
}