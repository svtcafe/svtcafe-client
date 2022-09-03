import { useState } from 'react';
import styled from '@emotion/styled';
import { X } from 'phosphor-react';

import Button from '../common/Button';
import Icon from '@/components/common/Icon';
import HamburgerButton from './HamburgerButton';
import NavLink from '../common/NavLink';

import { useToggle } from '@/hooks';
import { EColors, EFontSizes } from '@/styles/styles';

interface DrawerProps {
  children?: React.ReactNode;
  className?: string;
}

const Drawer: React.FC<DrawerProps> = ({ children, className }) => {
  const [menuActive, toggleMenuActive] = useToggle(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <Container className={className}>
      <HamburgerButton active={menuActive} onClick={toggleMenuActive} />
      <MenuContainer active={menuActive}>
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
        {children}
      </MenuContainer>
      <Backdrop active={menuActive} onClick={toggleMenuActive} />
    </Container>
  );
};

export default Drawer;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`;

const MenuContainer = styled.div<{ active?: boolean }>`
  position: fixed;
  width: 300px;
  height: 100%;
  right: 0;
  top: 0;
  z-index: 2;
  background-color: ${EColors.white};
  transition: all 0.3s;
  transform: translateX(${({ active }) => (active ? '0%' : '100%')});
  box-sizing: border-box;
  padding: 30px;
`;

const Backdrop = styled.div<{ active?: boolean }>`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: #00000099;
  display: ${({ active }) => (active ? 'block' : 'none')};
`;

const TopWrapper = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid ${EColors.gray_10};
`;

const ProfileInfo = styled.div`
  position: relative;
  margin-bottom: 20px;
  min-height: 20px;
`;

const UserName = styled.span`
  display: block;
  font-size: ${EFontSizes.body1};
  font-weight: bold;
`;

const EditProfile = styled(NavLink)`
  font-size: ${EFontSizes.body4};
  color: ${EColors.gray_70};
`;

const Close = styled(Icon)`
  position: absolute;
  font-size: 2.5em;
  top: 0;
  right: 0;
  cursor: pointer;
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
  margin-bottom: 10px;
  border: 1px solid ${EColors.gray_50};
`;
