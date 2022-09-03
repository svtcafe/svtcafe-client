import styled from '@emotion/styled';
import Image from 'next/image';

import HeaderNav from './HeaderNav';
import Drawer from './Drawer';
import NavItem from './NavItem';

import { EColors, ESizes } from '@/styles/styles';
import { BreakPoint, mq } from '@/styles/mixins/responsive';
import { useMediaQuerySSR } from '@/hooks';
import headerLogo from '@/assets/logo_header.png';
import { Calendar, House, MapPin } from 'phosphor-react';

const Header: React.FC = () => {
  const [isMobile, readyToRender] = useMediaQuerySSR({ query: mq[BreakPoint.phablet] });
  const Nav = isMobile ? Drawer : HeaderNav;
  const navType = isMobile ? 'mobile' : 'desktop';

  return (
    <Container>
      <InnerWrapper>
        <Logo>
          <Image src={headerLogo} alt='logo' />
        </Logo>
        {readyToRender && (
          <Nav>
            <NavItem href='/' icon={House} title='홈' type={navType} />
            <NavItem href='/events' icon={Calendar} title='이벤트' type={navType} />
            <NavItem href='/report' icon={MapPin} title='제보하기' type={navType} />
          </Nav>
        )}
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
