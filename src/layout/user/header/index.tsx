// import { RiMenu2Fill } from 'react-icons/ri';
import PageTitle from '@/components/headers/page-title';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { BellIcon, Menu, Search } from 'lucide-react';

import Profile from './components/Profile';
import { useState } from 'react';
import { sidebarLinks } from '@/data';
import SidebarLink from '../sidebar/components/SidebarLink';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const matches = useMediaQuery('(min-width: 1024px)');
  return (
    <header
      className={cn(
        'bg-secondary z-50  border-b-2 border-[#E5E5EA]  fixed top-0 px-8  py-5 transition-all duration-300  w-full lg:left-[280px] lg:w-[calc(100%-280px)]'
      )}>
      <div className="flex items-center justify-between">
        <PageTitle
          title="Hi Jeyhun !"
          subtitle={
            <span
              className={cn({
                'text-sm': !matches,
                'text-base': matches
              })}>
              {!matches
                ? 'Nice to see you here! 😊'
                : 'It is nice to see you here again. I hope you enjoyed in your last trip! 😊'}
            </span>
          }
        />

        <div className="flex items-start justify-center gap-x-5">
          <Button className="w-10 h-10 rounded-full bg-[#F7F7F7]" variant="ghost" size="icon">
            <BellIcon />
          </Button>
          <Button className="w-10 h-10 rounded-full bg-[#F7F7F7]" variant="ghost" size="icon">
            <Search />
          </Button>
          {!matches ? (
            <>
              <Button size="icon" variant="ghost" onClick={() => setShowMenu(!showMenu)}>
                <Menu />
              </Button>
              {showMenu && (
                <div className="fixed  top-[104px] left-0 w-full !z-50 bg-secondary  border border-white-100 p-3">
                  <ul className="flex flex-col gap-y-4">
                    <ul
                      onClick={() => setShowMenu(false)}
                      className={cn(
                        'md:flex flex-col text-sm  gap-2 px-2 text-foreground font-semibold',
                        {}
                      )}>
                      {sidebarLinks.map((sidebarLink) => {
                        return <SidebarLink key={sidebarLink.id} {...sidebarLink} />;
                      })}
                    </ul>
                  </ul>
                </div>
              )}
            </>
          ) : (
            <Profile />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
