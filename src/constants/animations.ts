// Animation timing constants
export const ANIMATION_DELAYS = {
  HEADER_LOGO: 1.5,
  HEADER_ELLIPSIS: 2.0,
  HEADER_TITLE: 2.5,
  HEADER_CTA: 3.5,
  NAVIGATION: 1.75,
  APPOINTMENT: 0.2,
  SERVICES_LIST: 0.8,
  SERVICES_ITEM_BASE: 0.1,
  SERVICES_SEPARATOR: 0.3,
  CALENDAR_HEADER: 0.2,
  CALENDAR_STATE: 0.3,
  TIME_SLOT: 0.05,
} as const;

export const ANIMATION_DURATIONS = {
  FAST: 0.2,
  NORMAL: 0.5,
  SLOW: 1.5,
  MEDIUM: 0.3,
  LONG: 0.8,
  EXTRA: 0.4,
} as const;

export const ANIMATION_PROPS = {
  STIFFNESS: 50,
  SPRING_TYPE: "spring" as const,
} as const;

// Common animation configs
export const createSpringTransition = (
  delay: number,
  duration: number = ANIMATION_DURATIONS.NORMAL
) => ({
  delay,
  duration,
  type: ANIMATION_PROPS.SPRING_TYPE,
  stiffness: ANIMATION_PROPS.STIFFNESS,
});

export const createFastTransition = (delay: number) => ({
  duration: ANIMATION_DURATIONS.FAST,
  delay,
});

export const createNormalTransition = (delay: number) => ({
  duration: ANIMATION_DURATIONS.NORMAL,
  delay,
});
