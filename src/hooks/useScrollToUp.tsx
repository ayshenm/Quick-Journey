import { useEffect } from 'react';

export const useScrollToUp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};
