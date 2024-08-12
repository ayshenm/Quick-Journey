import React from 'react';
import { NavLink } from 'react-router-dom';
import { FC } from 'react';
import { cn } from '@/lib/utils';

interface IProps {
  link?: string;
  name: string;
  icon: React.ReactNode;
}

const SidebarLink: FC<IProps> = ({ link, name, icon }) => {
  return (
    <li className="relative">
      <NavLink
        end={true}
        to={link || '#'}
        className={({ isActive, isPending }) =>
          isPending
            ? 'pending'
            : cn(
                'p-3 flex items-center text-foreground gap-3 hover:bg-card-foreground rounded-xl transition-all duration-500',
                {
                  'active bg-card-foreground text-secondary-foreground hover:bg-card-foreground':
                    isActive
                }
              )
        }>
        <span className="flex items-center gap-3 text-sm md:text-lg">
          {icon} {name}
        </span>
      </NavLink>
    </li>
  );
};

export default SidebarLink;
