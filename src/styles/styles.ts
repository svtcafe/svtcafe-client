export const enum EColors {
  purple = '#9747ff',

  blue_100 = '#92A8D1',
  blue_50 = '#92A8D150',
  blue_30 = '#92A8D130',
  bluegray = '#7A88A0',

  red = '#DA3633',
  pink = '#F7CAC9',

  black = '#241E17',
  gray_100 = '#666666',
  gray_80 = '#999999',
  gray_70 = '#AAAAAA',
  gray_50 = '#CCCCCC',
  gray_40 = '#D9D9D9',
  gray_20 = '#DDDDDD',
  gray_10 = '#EEEEEE',
  white = '#FFFFFF',

  border = '#EEEEEE',
  background = '#EFEFEF',
  placeholder = '#AAAAAA',

  transparent = 'transparent',
}

export const enum EFontSizes {
  h1 = '4.5rem',
  h2 = '3.5rem',
  h3 = '2.4rem',
  h4 = '2.2rem',
  h5 = '2rem',
  body1 = '1.8rem',
  body2 = '1.5rem',
  body3 = '1.4rem',
  body4 = '1.3rem',
  body5 = '1.0rem',
}

export const enum EFontWeight {
  light = 300,
  regular = 400,
  medium = 500,
  bold = 700,
}

export type TSize = 'sm' | 'md' | 'lg';
export type TButtonSize = TSize | 'xs';
export type TButtonVariant = 'default' | 'outlined';
export type TButtonColor = 'light' | 'primary' | 'dark';
export type TFontSize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'body1' | 'body2' | 'body3' | 'body4';
export type TFontWeight = 'light' | 'regular' | 'medium' | 'bold';
export type TInputSize = TSize;
