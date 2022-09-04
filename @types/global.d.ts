import type { NextPage } from 'next';
import type { ReactElement, ReactNode } from 'react';

declare global {
  type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    hideFooter?: boolean;
  };
}
