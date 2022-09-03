import styled from '@emotion/styled';
import Link from 'next/link';

import { EColors, EFontSizes, ESizes } from '@/styles/styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <InnerWrapper>
        <InfoText>
          세븐틴 카페 ©2022 Created by{' '}
          <Link href='/about'>
            <Highlight>팀 헤지호그🦔</Highlight>
          </Link>
        </InfoText>
        <InfoText>
          문의: <Highlight href='mailto:teamemail@gmail.com'>teamemail@gmail.com</Highlight>
        </InfoText>
      </InnerWrapper>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  height: 120px;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: ${ESizes.content}px;
  padding: 0 20px;
  height: 100%;
  margin: 0 auto;
`;

const InfoText = styled.span`
  display: block;
  font-size: ${EFontSizes.body4};
  margin: 5px 0;
`;

const Highlight = styled.a`
  color: ${EColors.blue_100};
  cursor: pointer;

  &:hover {
    color: ${EColors.blue_100}aa;
  }
`;
