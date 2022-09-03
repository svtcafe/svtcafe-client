import styled from '@emotion/styled';
import React from 'react';

import { Button } from '@/components';

interface HeaderNavProps {
  children?: React.ReactNode;
  className?: string;
}

const HeaderNav: React.FC<HeaderNavProps> = ({ children, className }) => {
  return (
    <Nav className={className}>
      <Menus>{children}</Menus>
      <Buttons>
        <Button label='Sign In' color='light' size='xs' />
        <Button label='Sign Up' color='light' size='xs' />
      </Buttons>
    </Nav>
  );
};

export default HeaderNav;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  flex: 1;
`;

const Menus = styled.div`
  flex: 1;
  margin-left: 10px;
`;

const Buttons = styled.div`
  button {
    margin-left: 15px;
  }
`;
