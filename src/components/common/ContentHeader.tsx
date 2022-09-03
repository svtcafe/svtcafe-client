import styled from '@emotion/styled';

import { EColors, EFontSizes, EFontWeight } from '@/styles/styles';

interface ContentHeaderProps extends React.ComponentProps<'span'> {}

const ContentHeader: React.FC<ContentHeaderProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default ContentHeader;

const Container = styled.span`
  color: ${EColors.bluegray};
  font-weight: ${EFontWeight.bold};
  font-size: ${EFontSizes.body1};
`;
