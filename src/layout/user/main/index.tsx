import { cn } from '@/lib/utils';
import { FC, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

const Main: FC<IProps> = ({ children }) => {
  return (
    <div
      className={cn(
        'ml-0 lg:ml-[280px] !mt-[133px] min-h-[calc(100vh-70px)] px-4 transition-all duration-300 mb-14',
        {}
      )}>
      {children}
    </div>
  );
};

export default Main;
