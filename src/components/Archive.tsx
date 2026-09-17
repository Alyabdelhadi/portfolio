import { useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import { more } from "../data/catalog";
import { useLit } from "./useLit";

export function Archive() {
  const ref = useRef<HTMLDivElement>(null);
  const lit = useLit(ref);
  const reduce = useReducedMotion();
  return (
    <div ref={ref} className={`archive${lit ? " is-on" : ""}`}>
      <div className="wrap">
        <i className="node" />
        <h3 className="archive__title">More systems</h3>
        <motion.ol
          className="archive__list"
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ staggerChildren: 0.06 }}
        >
          {more.map((a) => (
            <motion.li key={a.name} variants={{ hidden: { opacity: 0, x: -8 }, show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}>
              <span className="archive__name">{a.link ? <a href={a.link} target="_blank" rel="noopener">{a.name} ↗</a> : a.name}</span>
              <span className="archive__kind">{a.kind}</span>
              <span className="mono archive__platform">{a.platform}</span>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </div>
  );
}