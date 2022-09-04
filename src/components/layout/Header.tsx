import styled from '@emotion/styled';
import Image from 'next/image';

import HeaderNav from './HeaderNav';

import { EColors, ESizes } from '@/styles/styles';
import headerLogo from '@/assets/logo_header.png';

const Header: React.FC = () => {
  return (
    <Container>
      <InnerWrapper>
        <Logo>
          <Image src={headerLogo} alt='logo' />
        </Logo>
        <HeaderNav />
      </InnerWrapper>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  background: linear-gradient(to right, ${EColors.blue_100}, ${EColors.pink});
  height: 100px;
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  box-sizing: content-box;
  max-width: ${ESizes.content}px;
  padding: 0 20px;
  height: 100%;
  margin: 0 auto;
  box-sizing: border-box;
`;

const Logo = styled.div`
  width: 260px;
  cursor: pointer;
  line-height: 0;
`;
