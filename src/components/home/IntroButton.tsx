import styled from '@emotion/styled';

import { Button, NavLink } from '@/components';

interface IntroButtonProps {
  title: string;
  href: string;
  openInNewTab?: boolean;
  className?: string;
}

const IntroButton: React.FC<IntroButtonProps> = ({ title, href, openInNewTab, className }) => {
  return (
    <Link className={className} href={href} target={openInNewTab ? '_blank' : undefined}>
      <Body label={title} color='light' />
    </Link>
  );
};

export default IntroButton;

const Link = styled(NavLink)`
  display: block;
  margin: 0 20px;
  width: 150px;
`;

const Body = styled(Button)`
  width: 100%;
`;
