import { css } from '@emotion/react';
import { EColors } from './styles';

export const globalStyle = css`
  html {
    font-size: 62.5%;
  }

  body {
    font-family: Arial, 'Nanum Barun Gothic';
    background-color: ${EColors.gray_10};
  }
`;
