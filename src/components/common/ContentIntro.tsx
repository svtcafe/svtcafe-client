import styled from '@emotion/styled';

import { EColors, EFontSizes, EFontWeight, TSize } from '@/styles/styles';

interface ContentIntroProps extends React.ComponentProps<'span'> {
  size?: TSize | 'xs';
}

const ContentIntro: React.FC<ContentIntroProps> = ({ size = 'md', children }) => {
  return <Container size={size}>{children}</Container>;
};

export default ContentIntro;

const Container = styled.span<ContentIntroProps>`
  color: ${EColors.black};
  font-weight: ${EFontWeight.bold};
  ${({ size }) =>
    size === 'lg' &&
    `
   font-size: ${EFontSizes.h1};
    `};
  ${({ size }) =>
    size === 'md' &&
    `
   font-size: ${EFontSizes.h2};
    `};
  ${({ size }) =>
    size === 'sm' &&
    `
   font-size: ${EFontSizes.h3};
    `};
  ${({ size }) =>
    size === 'xs' &&
    `
   font-size: ${EFontSizes.h4};
    `};
`;
