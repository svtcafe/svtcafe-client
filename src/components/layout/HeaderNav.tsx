import { useState } from 'react';
import styled from '@emotion/styled';
import { X, Calendar, House, MapPin } from 'phosphor-react';

import Button from '../common/Button';
import Icon from '@/components/common/Icon';
import HamburgerButton from './HamburgerButton';
import NavLink from '../common/NavLink';

import { useMediaQuerySSR, useToggle } from '@/hooks';
import { EColors, EFontSizes } from '@/styles/styles';
import { BreakPoint, breakpoint, mq } from '@/styles/mixins/responsive';
import NavItem from './NavItem';

interface HeaderNavProps {
  className?: string;
}

const HeaderNav: React.FC<HeaderNavProps> = ({ className }) => {
  const [enableAnimation] = useMediaQuerySSR({ query: mq[BreakPoint.phablet] });

  const [menuActive, toggleMenuActive] = useToggle(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <Container className={className}>
      <Hanburger active={menuActive} onClick={toggleMenuActive} />
      <MenuContainer active={menuActive} animation={enableAnimation}>
        <TopWrapper>
          <ProfileInfo>
            {isLoggedIn ? (
              <>
                <UserName>Hansu Kim</UserName>
                <EditProfile href='/mypage'>내 프로필 수정</EditProfile>
              </>
            ) : null}
            <Close icon={X} weight='bold' onClick={toggleMenuActive} />
          </ProfileInfo>
          {isLoggedIn ? (
            <AuthButton label='Sign Out' color='light' fullWidth />
          ) : (
            <Buttons>
              <AuthButton label='Sign In' fullWidth />
              <AuthButton label='Sign Up' color='light' fullWidth />
            </Buttons>
          )}
        </TopWrapper>
        <Menus>
          <NavItem href='/' icon={House} title='홈' />
          <NavItem href='/events' icon={Calendar} title='이벤트' />
          <NavItem href='/report' icon={MapPin} title='제보하기' />
        </Menus>
      </MenuContainer>
      <Backdrop active={menuActive} onClick={toggleMenuActive} />
    </Container>
  );
};

export default HeaderNav;

const Container = styled.div`
  display: flex;
  flex: 1;

  ${breakpoint(BreakPoint.phablet)} {
    justify-content: flex-end;
  }
`;

const Hanburger = styled(HamburgerButton)`
  display: none;

  ${breakpoint(BreakPoint.phablet)} {
    display: flex;
  }
`;

const MenuContainer = styled.div<{ active?: boolean; animation?: boolean }>`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  flex: 1;

  transition: transform ${({ animation }) => (animation ? 0.3 : 0)}s;

  ${breakpoint(BreakPoint.phablet)} {
    display: block;
    position: fixed;
    width: 300px;
    height: 100%;
    right: 0;
    top: 0;
    z-index: 2;
    background-color: ${EColors.white};
    transform: translateX(${({ active }) => (active ? '0%' : '100%')});
    box-sizing: border-box;
    padding: 30px;
  }
`;

const Backdrop = styled.div<{ active?: boolean }>`
  display: none;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: #00000099;

  ${breakpoint(BreakPoint.phablet)} {
    display: ${({ active }) => (active ? 'block' : 'none')};
  }
`;

const TopWrapper = styled.div`
  display: flex;
  align-items: center;

  ${breakpoint(BreakPoint.phablet)} {
    display: block;
    padding-bottom: 10px;
    border-bottom: 1px solid ${EColors.gray_10};
  }
`;

const ProfileInfo = styled.div`
  flex-shrink: 0;

  ${breakpoint(BreakPoint.phablet)} {
    position: relative;
    margin-bottom: 20px;
    min-height: 20px;
  }
`;

const UserName = styled.span`
  font-size: ${EFontSizes.body2};
  color: ${EColors.white};

  ${breakpoint(BreakPoint.phablet)} {
    color: ${EColors.black};
    display: block;
    font-size: ${EFontSizes.body1};
    font-weight: bold;
  }
`;

const EditProfile = styled(NavLink)`
  display: none;
  font-size: ${EFontSizes.body4};
  color: ${EColors.gray_70};

  ${breakpoint(BreakPoint.phablet)} {
    display: block;
  }
`;

const Close = styled(Icon)`
  display: none;
  position: absolute;
  font-size: 2.5em;
  top: 0;
  right: 0;
  cursor: pointer;

  ${breakpoint(BreakPoint.phablet)} {
    display: block;
  }
`;

const Buttons = styled.div`
  display: flex;

  button {
    margin-right: 10px;
    &:last-child {
      margin-right: 0;
    }
  }
`;

const AuthButton = styled(Button)`
  width: 100px;
  border: 1px solid ${EColors.gray_50};
  margin-left: 10px;
  font-size: ${EFontSizes.body4};

  ${breakpoint(BreakPoint.desktop)} {
    background: #fff;
    color: ${EColors.black};
  }

  ${breakpoint(BreakPoint.tablet)} {
    background: #fff;
    color: ${EColors.black};
  }

  ${breakpoint(BreakPoint.phablet)} {
    width: 100%;
    margin-left: 0;
    margin-bottom: 10px;
  }
`;

const Menus = styled.div`
  flex: 1;
`;
