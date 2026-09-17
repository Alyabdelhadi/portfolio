import { Reveal } from "./Reveal";

export function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="wrap about__grid">
        <div>
          <h2 className="display display--sm" id="about-title">
            <Reveal as="span" className="line">The person</Reveal>
            <Reveal as="span" className="line" delay={0.1}>behind the software.</Reveal>
          </h2>
        </div>
        <Reveal className="about__body" delay={0.15}>
          <p className="about__name">Ali Abdelhadi</p>
          <p className="about__role">Senior Software Developer — Mobile &amp; Full-Stack</p>
          <p className="about__quote">“4+ years building production-grade mobile and web applications from architecture through release.”</p>
          <dl className="facts">
            <dt className="mono">Works on</dt>
            <dd>Mobile development, full-stack development, backend systems, payments, AI integrations, automation.</dd>
            <dt className="mono">Education</dt>
            <dd>Bachelor's in Computer Science, Lebanese International University — 2021</dd>
            <dt className="mono">Languages</dt>
            <dd>English, Arabic, French</dd>
            <dt className="mono">CV</dt>
            <dd><a href="/Ali_Abdelhadi_CV.pdf" target="_blank" rel="noopener">Download the PDF</a></dd>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}