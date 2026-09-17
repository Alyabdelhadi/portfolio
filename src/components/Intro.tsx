import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "./Reveal";
import { Typewriter } from "./Typewriter";

export function Intro() {
  const reduce = useReducedMotion();
  return (
    <section className="intro" id="top" aria-labelledby="intro-title">
      <div className="wrap intro__grid">
        <div className="intro__text">
          <Reveal as="p" className="mono intro__label">Software developer<br />Beirut, Lebanon</Reveal>
          <h1 className="intro__title" id="intro-title" aria-label="I don't just build software. I build the solution.">
            <Reveal as="span" className="line" delay={0.1}>I don't just build software.</Reveal>
            <span className="line line--accent"><Typewriter text="I build the solution." delay={1.1} /></span>
          </h1>
          <Reveal as="p" className="intro__lede" delay={0.3}>From mobile applications to backend systems, payments and AI-powered workflows, I turn real problems into working products.</Reveal>
          <Reveal className="intro__actions" delay={0.4}>
            <a className="btn" href="#work">Explore the work</a>
            <span className="mono intro__scroll">Scroll to discover</span>
          </Reveal>
        </div>
        <motion.figure
          className="intro__media"
          initial={reduce ? false : { opacity: 0, y: 18, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <img className="intro__photo" src="/img/ali.webp" alt="Ali Abdelhadi" width={600} height={750} fetchPriority="high" />
          <figcaption className="mono">Ali Abdelhadi<br />Senior Software Developer</figcaption>
        </motion.figure>
      </div>
    </section>
  );
}