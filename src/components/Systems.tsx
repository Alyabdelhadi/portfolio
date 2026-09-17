import { useState } from "react";
import { motion } from "motion/react";
import { approach } from "../data/catalog";
import { Reveal } from "./Reveal";

export function Systems() {
  const [i, setI] = useState(0);
  return (
    <section className="section systems" id="systems" aria-labelledby="systems-title">
      <div className="wrap">
        <h2 className="display" id="systems-title">
          <Reveal as="span" className="line">Different problems.</Reveal>
          <Reveal as="span" className="line" delay={0.1}>Different systems.</Reveal>
          <Reveal as="span" className="line line--accent" delay={0.2}>One approach.</Reveal>
        </h2>
        <Reveal className="map" delay={0.2}>
          <div className="map__keys" role="tablist" aria-label="Areas of work">
            {approach.map((a, k) => (
              <button
                key={a.key}
                className={`map__key mono${k === i ? " is-on" : ""}`}
                type="button"
                role="tab"
                aria-selected={k === i}
                onClick={() => setI(k)}
                onMouseEnter={() => setI(k)}
                onFocus={() => setI(k)}
              >
                {a.key}
                {k === i && <motion.i className="map__mark" layoutId="map-mark" transition={{ type: "spring", stiffness: 400, damping: 36 }} />}
              </button>
            ))}
          </div>
          <p className="map__detail" aria-live="polite">
            <motion.span key={i} className="map__detail-inner" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}>
              <span className="map__detail-key">{approach[i].key}</span>
              <span className="map__detail-stack">{approach[i].stack}</span>
            </motion.span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}