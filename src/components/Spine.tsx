import { useEffect, useState, type RefObject } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

/** The vertical line that connects the story. It draws itself as the reader scrolls and ends on the contact node. */
export function Spine({ target }: { target: RefObject<HTMLDivElement | null> }) {
  const reduce = useReducedMotion();
  const [height, setHeight] = useState<number | undefined>(undefined);
  const { scrollYProgress } = useScroll({ target, offset: ["start 75%", "end end"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  useEffect(() => {
    const measure = () => {
      const story = target.current, end = story?.querySelector<HTMLElement>(".contact .node");
      if (!story || !end) return;
      const s = story.getBoundingClientRect(), e = end.getBoundingClientRect();
      setHeight(e.top - s.top + e.height / 2);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (target.current) ro.observe(target.current);
    document.fonts?.ready.then(measure);
    return () => ro.disconnect();
  }, [target]);

  return (
    <div className="spine" aria-hidden="true" style={height ? { height } : undefined}>
      <i className="spine__track" />
      <motion.i className="spine__draw" style={{ scaleY: reduce ? 1 : scaleY }} />
    </div>
  );
}