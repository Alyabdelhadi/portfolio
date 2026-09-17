import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

/** Phone screenshots you can swipe. Native scroll-snap, dots, and a slow auto-advance while in view. */
export function Swiper({ images, alt }: { images: string[]; alt: string }) {
  const track = useRef<HTMLDivElement>(null);
  const inView = useInView(track, { margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = (n: number) => {
    const el = track.current; if (!el) return;
    const k = (n + images.length) % images.length;
    el.scrollTo({ left: k * el.clientWidth, behavior: reduce ? "auto" : "smooth" });
  };

  useEffect(() => {
    const el = track.current; if (!el) return;
    const onScroll = () => setI(Math.round(el.scrollLeft / el.clientWidth));
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!inView || paused || reduce || images.length < 2) return;
    const id = setInterval(() => go(i + 1), 3800);
    return () => clearInterval(id);
  }, [inView, paused, reduce, i, images.length]);

  return (
    <div className="swiper" onPointerEnter={() => setPaused(true)} onPointerLeave={() => setPaused(false)} onTouchStart={() => setPaused(true)}>
      <div className="swiper__track" ref={track} aria-label={alt} role="group">
        {images.map((src, k) => (
          <img key={src} src={src} alt={`${alt}, screen ${k + 1} of ${images.length}`} loading="lazy" decoding="async" width={640} height={1390} />
        ))}
      </div>
      <div className="swiper__dots" role="tablist" aria-label="Screens">
        {images.map((src, k) => (
          <button key={src} type="button" role="tab" aria-selected={k === i} aria-label={`Screen ${k + 1}`} className={k === i ? "is-on" : ""} onClick={() => go(k)} />
        ))}
      </div>
    </div>
  );
}