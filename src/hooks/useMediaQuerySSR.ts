import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

type MQParams = Parameters<typeof useMediaQuery>;
type MediaQuerySSRHook = (...args: MQParams) => [boolean, boolean];

const useMediaQuerySSR: MediaQuerySSRHook = (...args) => {
  const [isMatch, setIsMatch] = useState<boolean | undefined>();
  const matches = useMediaQuery.apply(null, args);
  const readyTorender = typeof isMatch === 'boolean';

  useEffect(() => {
    setIsMatch(matches);
  }, [matches]);

  return [!!isMatch, readyTorender];
};

export default useMediaQuerySSR;
