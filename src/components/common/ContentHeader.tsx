import styled from '@emotion/styled';

import { EColors, EFontSizes, EFontWeight } from '@/styles/styles';

interface ContentHeaderProps extends React.ComponentProps<'div'> {}

const ContentHeader: React.FC<ContentHeaderProps> = ({ children, ...props }) => {
  return (
    <Container {...props}>
      <Header>{children}</Header>
      <Hr />
    </Container>
  );
};

export default ContentHeader;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Header = styled.span`
  color: ${EColors.bluegray};
  font-weight: ${EFontWeight.bold};
  font-size: ${EFontSizes.body1};
  word-wrap: normal;
`;

const Hr = styled.div`
  height: 1px;
  width: 80%;
  background-color: ${EColors.border};
`;
