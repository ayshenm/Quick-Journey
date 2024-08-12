import { FC } from 'react';
import { cn } from '@/lib/utils';

interface PageTitleProps {
  title: string;
  subtitle?:React.ReactNode;
  className?: string;
}

const PageTitle: FC<PageTitleProps> = ({ title, subtitle, className }) => {
  return (
    <div className={cn('', className)}>
      <h3 className="text-xl font-medium text-foreground">{title}</h3>
      {subtitle && <p className="text-muted-foreground mt-1">{subtitle}</p>}
    </div>
  );
};

export default PageTitle;
