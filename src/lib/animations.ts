export const EASE = {
  smooth: "power2.out",
  snappy: "power3.out",
  elastic: "elastic.out(1, 0.5)",
  bounce: "back.out(1.7)",
} as const;

export const DURATION = {
  fast: 0.3,
  default: 0.6,
  slow: 1.0,
} as const;

export const REVEAL = {
  y: 40,
  opacity: 0,
  duration: DURATION.default,
  ease: EASE.smooth,
};

export const FADE_IN = {
  opacity: 0,
  duration: DURATION.fast,
  ease: EASE.smooth,
};

export const SCALE_IN = {
  scale: 0.95,
  opacity: 0,
  duration: DURATION.fast,
  ease: EASE.snappy,
};

export const SLIDE_UP = {
  y: 16,
  opacity: 0,
  duration: DURATION.fast,
  ease: EASE.smooth,
};
