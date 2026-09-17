import { useRef } from "react";
import { Nav } from "./components/Nav";
import { Intro } from "./components/Intro";
import { Spine } from "./components/Spine";
import { Idea } from "./components/Idea";
import { Problem } from "./components/Problem";
import { Archive } from "./components/Archive";
import { Systems } from "./components/Systems";
import { Process } from "./components/Process";
import { Stack } from "./components/Stack";
import { About } from "./components/About";
import { Next } from "./components/Next";
import { Reveal } from "./components/Reveal";
import { WhatsApp } from "./components/WhatsApp";
import { problems } from "./data/catalog";

export default function App() {
  const story = useRef<HTMLDivElement>(null);
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Nav />
      <main id="main">
        <div className="wash" aria-hidden="true"><i /><i /><i /></div>
        <Intro />
        <div className="story" ref={story}>
          <Spine target={story} />
          <Idea />
          <section className="section problems" id="work" aria-labelledby="work-title">
            <div className="wrap">
              <Reveal as="h2" className="section__title" id="work-title">Problems I've solved</Reveal>
            </div>
            {problems.map((p, i) => <Problem key={p.id} project={p} index={i + 1} />)}
            <Archive />
          </section>
          <Systems />
          <Process />
          <Stack />
          <About />
          <Next />
        </div>
      </main>
      <WhatsApp />
    </>
  );
}
