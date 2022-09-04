export enum BreakPoint {
  desktop = 'desktop',
  desktop_only = 'desktop_only',
  tablet = 'tablet',
  tablet_only = 'tablet_only',
  phablet = 'phablet',
  phablet_only = 'phablet_only',
  mobile = 'mobile',
  mobile_only = 'mobile_only',
  mobile_small = 'mobile_small',
}

const SCREEN_SIZE = {
  [BreakPoint.desktop]: 1300,
  [BreakPoint.tablet]: 1024,
  [BreakPoint.phablet]: 767,
  [BreakPoint.mobile]: 480,
  [BreakPoint.mobile_small]: 320,
} as const;

export const mq = {
  [BreakPoint.desktop]: `(max-width: ${SCREEN_SIZE[BreakPoint.desktop]}px)`,
  [BreakPoint.desktop_only]: `(min-width: ${SCREEN_SIZE[BreakPoint.desktop]}px)`,
  [BreakPoint.tablet]: `(max-width: ${SCREEN_SIZE[BreakPoint.tablet]}px)`,
  [BreakPoint.tablet_only]: `(max-width: ${SCREEN_SIZE[BreakPoint.tablet]}) and (min-width: ${
    SCREEN_SIZE[BreakPoint.phablet]
  })`,
  [BreakPoint.phablet]: `(max-width: ${SCREEN_SIZE[BreakPoint.phablet]}px)`,
  [BreakPoint.phablet_only]: `(max-width: ${SCREEN_SIZE[BreakPoint.phablet]}) and (min-width: ${
    SCREEN_SIZE[BreakPoint.mobile]
  })`,
  [BreakPoint.mobile]: `(max-width: ${SCREEN_SIZE[BreakPoint.mobile]}px)`,
  [BreakPoint.mobile_only]: `(max-width: ${SCREEN_SIZE[BreakPoint.mobile]}) and (min-width: ${
    SCREEN_SIZE[BreakPoint.mobile_small]
  })`,
  [BreakPoint.mobile_small]: `(max-width: ${SCREEN_SIZE[BreakPoint.mobile_small]}px)`,
};

export const breakpoint = (point: BreakPoint) => `@media ${mq[point]}`;
