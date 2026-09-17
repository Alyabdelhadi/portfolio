import { motion, useReducedMotion } from "motion/react";

/** Floating WhatsApp button. Opens a chat with the number from the contact section. */
export function WhatsApp() {
  const reduce = useReducedMotion();
  return (
    <motion.a
      className="fab"
      href="https://wa.me/96176618326?text=Hi%20Ali%2C%20I%20have%20something%20that%20needs%20to%20be%20built."
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
      initial={reduce ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={reduce ? undefined : { scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
    >
      <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
        <path fill="currentColor" d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.91-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12.05 21.8h-.01a9.8 9.8 0 0 1-5-1.37l-.36-.21-3.72.98.99-3.63-.23-.37a9.8 9.8 0 0 1-1.5-5.23c0-5.42 4.41-9.83 9.84-9.83 2.63 0 5.1 1.02 6.95 2.88a9.77 9.77 0 0 1 2.88 6.96c0 5.42-4.41 9.83-9.84 9.83zm8.37-18.2A11.8 11.8 0 0 0 12.05 0C5.5 0 .16 5.33.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.9 11.9 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.33 11.89-11.89 0-3.18-1.24-6.16-3.49-8.41z"/>
      </svg>
    </motion.a>
  );
}