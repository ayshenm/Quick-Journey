import { cn } from '@/lib/utils';
import { FC } from 'react';

interface IProps {
  navLink: {
    link: string | undefined;
    title: string;
    path: string;
  };
  className?: string;
  onClick?: () => void;
}

const NavBarLink: FC<IProps> = ({ navLink, className, onClick }) => {
  return (
    <li
      className={cn(
        'text-foreground  text-base tracking-wide transition-all duration-300 font-medium transform hover:scale-105 hover:text-foreground/80',
        className
      )}
      onClick={() => {
        onClick?.();
      }}>
      <a href={navLink.path}>{navLink.title}</a>
    </li>
  );
};

export default NavBarLink;
