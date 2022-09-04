import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';

import Icon from '../common/Icon';
import NavLink from '../common/NavLink';

import { EColors, EFontSizes } from '@/styles/styles';
import { BreakPoint, breakpoint } from '@/styles/mixins/responsive';

interface NavItemProps {
  href: string;
  title: string;
  className?: string;
  icon: React.ComponentProps<typeof Icon>['icon'];
}

const NavItem: React.FC<NavItemProps> = ({ href, title, icon, className }) => {
  const router = useRouter();

  return (
    <NavLink className={className} href={href}>
      <Container active={router.pathname === href}>
        <NavIcon icon={icon} weight='fill' />
        <span>{title}</span>
      </Container>
    </NavLink>
  );
};

export default NavItem;

const Container = styled.div<{ active?: boolean }>`
  display: inline-block;
  color: ${EColors.white};
  font-size: ${EFontSizes.body1};
  margin: 0 18px;

  &:hover {
    color: ${EColors.white}aa;
  }

  ${breakpoint(BreakPoint.phablet)} {
    display: flex;
    align-items: center;
    background-color: ${({ active }) => (active ? `${EColors.blue_100}99` : 'transparent')};
    color: ${({ active }) => (active ? EColors.white : EColors.black)};
    height: 40px;
    border-radius: 15px;
    font-size: ${EFontSizes.body2};
    margin: 0;
    margin-bottom: 20px;
    padding: 0 20px;

    &:hover {
      color: ${({ active }) => (active ? EColors.white : EColors.black)}99;
    }
  }
`;

const NavIcon = styled(Icon)`
  display: none;
  font-size: ${EFontSizes.body1};
  margin-right: 20px;

  ${breakpoint(BreakPoint.phablet)} {
    display: block;
  }
`;
