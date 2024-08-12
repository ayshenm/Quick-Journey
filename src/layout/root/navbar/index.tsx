import { Button } from '@/components/ui/button';
import { navLinks } from '@/data';
import { useState } from 'react';
import NavBarLink from './components/NavbarLink';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import Logo from '@/assets/home/Logo.png';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const matches = useMediaQuery('(min-width: 1024px)');
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const isRootPath = location.pathname === '/';

  const handleLinkClick = () => {
    setShowMenu(false);
  };

  return (
    <nav
      className={cn(
        ' !bg-white fixed top-5 mt-5 z-50 w-[85%] flex justify-between items-center px-4 py-4  rounded-2xl shadow-lg lg:static',
        {
          'bg-transparent': !isRootPath,
          'lg:container': true,

        }
      )}>
      <div>
        <a href="/">
          <img src={Logo} alt="logo" width="144" height="28" />
        </a>
      </div>
      {!matches ? (
        <>
          <Button size="icon" variant="ghost" onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? <X /> : <Menu />}
          </Button>
          {showMenu && (
            <div
              className={cn(
                'fixed h-full top-[90px] left-[8%] rounded-2xl w-[85%]  z-50 bg-white mt-8  md:mt-20 md:left-[7%] md:top-[3.2rem] md:h-[300px] md:w-[85%]  p-3 transition-transform transform duration-300',
                {
                  'translate-x-0': showMenu,
                  '-translate-x-full': !showMenu
                }
              )}>
              <div className="flex justify-start items-start">
                <ul className="flex flex-col gap-y-4 justify-center items-start px-[0.6rem]">
                  {navLinks.map((navLink, index) => (
                    <NavBarLink key={index} navLink={navLink} onClick={handleLinkClick} />
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-3 w-full mt-4">
                <Link to="/login">
                  <Button className="w-full" variant="outline">
                    Log in
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="w-full">Sign up</Button>
                </Link>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <div>
            <ul className="flex justify-between gap-x-6">
              {navLinks.map((navLink, index) => (
                <NavBarLink key={index} navLink={navLink} onClick={handleLinkClick} />
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex gap-3">
              <Link to="/login">
                <Button variant="outline">Log in</Button>
              </Link>
              <Link to="/signup">
                <Button>Sign up</Button>
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
