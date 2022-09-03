import Link from 'next/link';
import React from 'react';

const NavLink: React.FC<React.ComponentProps<typeof Link>> = ({ href, ...props }) => {
  return (
    <Link href={href}>
      <a {...props} />
    </Link>
  );
};

export default NavLink;
