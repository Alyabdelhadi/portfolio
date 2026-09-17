import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

/** Types the text character by character, then leaves a blinking caret. Renders the full text at once under reduced motion. */
export function Typewriter({ text, delay = 0, speed = 55, start = true }: { text: string; delay?: number; speed?: number; start?: boolean }) {
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? text.length : 0);
  useEffect(() => {
    if (reduce || !start) return;
    let i = 0, id = 0;
    const timer = window.setTimeout(() => { id = window.setInterval(() => { i++; setN(i); if (i >= text.length) clearInterval(id); }, speed); }, delay * 1000);
    return () => { clearTimeout(timer); clearInterval(id); };
  }, [text, delay, speed, reduce, start]);
  return (
    <span className="type" aria-hidden="true">
      {text.slice(0, n)}
      <span className={`caret${n >= text.length ? " caret--idle" : ""}`} />
    </span>
  );
}