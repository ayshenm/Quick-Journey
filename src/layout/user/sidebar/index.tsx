import { sidebarLinks } from '@/data';
import SidebarLink from './components/SidebarLink';
import { cn } from '@/lib/utils';
import { Link, useNavigate } from 'react-router-dom';
import { paths } from '@/routes/paths';
import Logo from '@/assets/home/Logo.png';
import { useAuth } from '@/contexts/AuthContext';
import { LogOut } from 'lucide-react';

const Sidebar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div
      className={cn(
        'sidebar z-[2000]  fixed top-0 left-0 bg-secondary lg:w-[280px] h-screen transition-all duration-300 sm:z-50 md:w-[240px] w-[0px]'
      )}>
      <div className="mt-8 flex items-center justify-start my-20 px-2 ">
        <Link to={paths.user.dashoard}>
          <img width={150} src={Logo} alt="logo" />
        </Link>
      </div>

      <ul className={cn('hidden md:flex flex-col  gap-2 px-2 text-foreground font-semibold', {})}>
        {sidebarLinks.map((sidebarLink) => {
          return <SidebarLink key={sidebarLink.id} {...sidebarLink} />;
        })}
        <li className="relative">
          <div
            onClick={handleLogout}
            className="p-3 flex items-center text-red-500 gap-3 hover:bg-card-foreground rounded-xl transition-all duration-500 cursor-pointer">
            <span className="flex items-center gap-3 text-sm md:text-lg">
              {' '}
              <LogOut />
              Log Out
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
