import { Outlet } from 'react-router-dom';
import Main from './main';
import Sidebar from './sidebar';
import Header from './header';
import { useScrollToUp } from '@/hooks/useScrollToUp';
import { Toaster } from 'sonner';

const ProtectedLayout = () => {
  useScrollToUp();
  return (
    <>
      <Sidebar />
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Toaster position="top-center" />
    </>
  );
};

export default ProtectedLayout;
