import { useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import type { Project } from "../data/catalog";
import { Reveal } from "./Reveal";
import { Flow } from "./Flow";
import { FanIn } from "./FanIn";
import { Swiper } from "./Swiper";
import { useLit } from "./useLit";

function Shot({ project }: { project: Project }) {
  return (
    <figure className={`shot${project.mark ? " shot--mark" : ""}${project.phone ? " shot--phone" : ""}`}>
      <img
        src={project.image}
        alt={project.imageAlt ?? ""}
        loading="lazy"
        decoding="async"
        width={project.mark ? 192 : project.phone ? 640 : 1280}
        height={project.mark ? 192 : project.phone ? 1280 : 800}
      />
    </figure>
  );
}
export function Problem({ project: p, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const lit = useLit(ref);
  const reduce = useReducedMotion();
  return (
    <article ref={ref} className={`problem${lit ? " is-on" : ""}`} id={p.id} aria-labelledby={`q-${p.id}`}>
      <div className="wrap problem__grid">
        <i className="node node--big" />
        <div className="problem__ask">
          <p className="mono problem__num">{String(index).padStart(2, "0")}</p>
          <p className="mono problem__cat">{p.category}</p>
          <Reveal as="h3" className="problem__q" id={`q-${p.id}`}>{p.question}</Reveal>
        </div>
        <div className="problem__answer">
          <p className="mono problem__arrow" aria-hidden="true">↓ The system</p>
          <Reveal as="h4" className="system__name">{p.name} <span>{p.kind}</span></Reveal>
          <Reveal as="p" className="system__desc" delay={0.1}>{p.description}</Reveal>
          {p.fanIn && <FanIn />}
          <Flow steps={p.flow} live={p.live} />
          <motion.ul
            className="tags mono"
            aria-label="Focus and technology"
            initial={reduce ? false : "hidden"}
            whileInView="show"
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ staggerChildren: 0.05, delayChildren: 0.2 }}
          >
            {p.focus.map((t) => (
              <motion.li key={t} variants={{ hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}>{t}</motion.li>
            ))}
          </motion.ul>
          {p.images ? <Swiper images={p.images} alt={p.imageAlt ?? p.name} /> : p.image && <Shot project={p} />}
          {p.link
            ? <a className="btn btn--sm" href={p.link} target="_blank" rel="noopener">View system</a>
            : <span className="mono system__status">Private system · not publicly linked</span>}
        </div>
      </div>
    </article>
  );
}