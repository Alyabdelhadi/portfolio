import { useEffect, useState } from "react";
import { motion } from "motion/react";

const links = [
  ["work", "Work"],
  ["process", "Process"],
  ["stack", "Stack"],
  ["about", "About"],
  ["contact", "Contact"],
] as const;

export function Nav() {
  const [active, setActive] = useState<string>("");
  useEffect(() => {
    const els = links.map(([id]) => document.getElementById(id)).filter((e): e is HTMLElement => !!e);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-35% 0px -55% 0px" }
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
  return (
    <header className="nav" aria-label="Site">
      <a className="nav__brand" href="#top" aria-label="Ali Abdelhadi, back to top">
        <img className="nav__logo" src="/img/logo.png" alt="ALI." width={262} height={120} />
      </a>
      <nav className="nav__links mono" aria-label="Sections">
        {links.map(([id, label]) => (
          <a key={id} href={`#${id}`} className={active === id ? "is-on" : ""} aria-current={active === id ? "location" : undefined}>
            {label}
            {active === id && <motion.i className="nav__mark" layoutId="nav-mark" transition={{ type: "spring", stiffness: 400, damping: 36 }} />}
          </a>
        ))}
      </nav>
    </header>
  );
}