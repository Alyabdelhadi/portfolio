import { stack } from "../data/catalog";
import { Reveal } from "./Reveal";

export function Stack() {
  return (
    <section className="section stack" id="stack" aria-labelledby="stack-title">
      <div className="wrap">
        <h2 className="display display--sm" id="stack-title">
          <Reveal as="span" className="line">The tools change.</Reveal>
          <Reveal as="span" className="line" delay={0.1}>The problem doesn't.</Reveal>
        </h2>
        <div className="groups">
          {stack.map((g, i) => (
            <Reveal key={g.group} className="group" delay={i * 0.06}>
              <h3 className="mono group__name">{g.group}</h3>
              <ul className="group__list">
                {g.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}