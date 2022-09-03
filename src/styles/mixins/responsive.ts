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

export const breakpoint = (point: BreakPoint) => {
  switch (point) {
    case BreakPoint.desktop:
      return `@media (max-width: ${SCREEN_SIZE[BreakPoint.desktop]}px)`;
    case BreakPoint.desktop_only:
      return `@media (min-width: ${SCREEN_SIZE[BreakPoint.desktop]}px)`;
    case BreakPoint.tablet:
      return `@media (max-width: ${SCREEN_SIZE[BreakPoint.tablet]}px)`;
    case BreakPoint.tablet_only:
      return `@media (max-width: ${SCREEN_SIZE[BreakPoint.tablet]}) and (min-width: ${
        SCREEN_SIZE[BreakPoint.phablet]
      })`;
    case BreakPoint.phablet:
      return `@media (max-width: ${SCREEN_SIZE[BreakPoint.phablet]}px)`;
    case BreakPoint.phablet_only:
      return `@media (max-width: ${SCREEN_SIZE[BreakPoint.phablet]}) and (min-width: ${
        SCREEN_SIZE[BreakPoint.mobile]
      })`;
    case BreakPoint.mobile:
      return `@media (max-width: ${SCREEN_SIZE[BreakPoint.mobile]}px)`;
    case BreakPoint.mobile_only:
      return `@media (max-width: ${SCREEN_SIZE[BreakPoint.mobile]}) and (min-width: ${
        SCREEN_SIZE[BreakPoint.mobile_small]
      })`;
    case BreakPoint.mobile_small:
    default:
      return `@media (max-width: ${SCREEN_SIZE[BreakPoint.mobile_small]}px)`;
  }
};
