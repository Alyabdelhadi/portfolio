import { useRef } from "react";
import { Reveal } from "./Reveal";
import { useLit } from "./useLit";

function Word({ children }: { children: string }) {
  const ref = useRef<HTMLLIElement>(null);
  const lit = useLit(ref);
  return <li ref={ref} className={`chain__item${lit ? " is-on" : ""}`}><i className="node" />{children}</li>;
}

export function Idea() {
  return (
    <section className="section idea" id="idea" aria-labelledby="idea-title">
      <div className="wrap">
        <h2 className="display" id="idea-title">
          <Reveal as="span" className="line">Every product</Reveal>
          <Reveal as="span" className="line" delay={0.1}>starts with</Reveal>
          <Reveal as="span" className="line" delay={0.2}>a problem.</Reveal>
        </h2>
        <ol className="chain" aria-label="Problem to product">
          <Word>Problem</Word>
          <Word>Idea</Word>
          <Word>System</Word>
          <Word>Product</Word>
        </ol>
      </div>
    </section>
  );
}