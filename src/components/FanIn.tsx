import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

const paths = [
  "M0 10 C 90 10, 110 60, 190 60",
  "M0 35 C 90 35, 110 60, 190 60",
  "M0 60 L 190 60",
  "M0 85 C 90 85, 110 60, 190 60",
  "M0 110 C 90 110, 110 60, 190 60",
];

/** Many voters entering one system at the same moment. Dots travel the paths on a loop while in view. */
export function FanIn() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();
  return (
    <div ref={ref} className="fanin" role="img" aria-label="Many voters entering the system at once">
      <svg viewBox="0 0 220 120" width="220" height="120" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="1">
          {paths.map((d) => <path key={d} d={d} />)}
        </g>
        <circle className="fanin__hub" cx="190" cy="60" r="5" />
      </svg>
      {paths.map((d, i) => (
        <motion.i
          key={d}
          className="fanin__voter"
          style={{ offsetPath: `path("${d}")` }}
          initial={{ offsetDistance: "0%" }}
          animate={inView && !reduce ? { offsetDistance: ["0%", "100%"] } : { offsetDistance: "0%" }}
          transition={{ duration: 2.2, delay: i * 0.35, repeat: Infinity, repeatDelay: 0.6, ease: "easeInOut" }}
        />
      ))}
      <div className="fanin__legend mono"><span>Voters</span><span>System</span></div>
    </div>
  );
}