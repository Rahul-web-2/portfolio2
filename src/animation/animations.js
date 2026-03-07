// ── Parent stagger containers ──────────────────────────────────────────────

// Standard stagger — used for most sections
export const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

// Tighter stagger — used for nav links and list items
export const navStagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

// ── Directional fades ──────────────────────────────────────────────────────

// Slide up and fade in — general purpose
export const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Slide down and fade in — used for header / top elements
export const fadeDown = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Slide in from the right and fade in
export const fadeRight = {
  hidden: { opacity: 0, x: 25 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Slide in from the left and fade in
export const fadeLeft = {
  hidden: { opacity: 0, x: -25 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ── Scale-based entrances ──────────────────────────────────────────────────

// Pop in from small — used for icons and quick accent elements
export const pop = {
  hidden: { opacity: 0, scale: 0.5 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

// Scale in from slightly smaller — used for buttons and cards
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export const panelVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: 40,
    scale: 0.97,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};