import { useRef } from "react";
import { useInView } from "motion/react";
import { process } from "../data/catalog";
import { Reveal } from "./Reveal";

function Step({ n, name, line }: { n: number; name: string; line: string }) {
  const ref = useRef<HTMLLIElement>(null);
  const centered = useInView(ref, { margin: "-42% 0px -42% 0px" });
  return (
    <li ref={ref} className={`step${centered ? " is-on" : ""}`} tabIndex={0}>
      <i className="node" />
      <span className="mono step__n">{String(n).padStart(2, "0")}</span>
      <span className="step__body">
        <span className="step__name">{name}</span>
        <span className="step__say">“{line}”</span>
      </span>
    </li>
  );
}

export function Process() {
  return (
    <section className="section process" id="process" aria-labelledby="process-title">
      <div className="wrap">
        <Reveal as="h2" className="section__title" id="process-title">How I build</Reveal>
        <ol className="steps">
          {process.map((s, i) => <Step key={s.name} n={i + 1} name={s.name} line={s.line} />)}
        </ol>
      </div>
    </section>
  );
}