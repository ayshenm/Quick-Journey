import { FC, ReactNode } from 'react';
import { useScrollToUp } from '@/hooks/useScrollToUp';

interface IProps {
  children: ReactNode;
}

const Main: FC<IProps> = ({ children }) => {
  useScrollToUp();
  return <div className="">{children}</div>;
};

export default Main;
