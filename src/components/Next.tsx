import { useRef } from "react";
import { useInView } from "motion/react";
import { Reveal } from "./Reveal";
import { Typewriter } from "./Typewriter";
import { useLit } from "./useLit";

export function Next() {
  const ref = useRef<HTMLElement>(null);
  const lit = useLit(ref, "0px 0px -8% 0px");
  const lede = useRef<HTMLParagraphElement>(null);
  const seen = useInView(lede, { once: true, margin: "0px 0px -15% 0px" });
  return (
    <section className="section next" id="contact" aria-labelledby="next-title">
      <div className="wrap">
        <Reveal as="p" className="mono next__label">Next</Reveal>
        <h2 className="display display--xl" id="next-title">
          <Reveal as="span" className="line">What's the</Reveal>
          <Reveal as="span" className="line" delay={0.1}>next problem?</Reveal>
        </h2>
        <p className="next__lede" ref={lede}>
          <span className="sr-only">Have something that needs to be built?</span>
          <Typewriter text="Have something that needs to be built?" start={seen} delay={0.4} speed={40} />
        </p>
        <Reveal delay={0.3}>
          <a className="btn btn--fill" href="mailto:Aliabdelhadi64@gmail.com?subject=The%20next%20problem">Let's build it</a>
        </Reveal>
        <address ref={ref} className={`contact mono${lit ? " is-on" : ""}`}>
          <i className="node" />
          <a href="mailto:Aliabdelhadi64@gmail.com">Aliabdelhadi64@gmail.com</a>
          <a href="tel:+96176618326">+961 76 618326</a>
          <span>Beirut, Lebanon</span>
          <span className="social">
            <a href="https://github.com/Alyabdelhadi" target="_blank" rel="noopener" aria-label="GitHub">
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.17c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/alyabdelhadi/" target="_blank" rel="noopener" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>
              LinkedIn
            </a>
          </span>
        </address>
        <p className="mono colophon">© {new Date().getFullYear()} Ali Abdelhadi · Problem → Product</p>
      </div>
    </section>
  );
}