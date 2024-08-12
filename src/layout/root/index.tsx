import { Outlet, useLocation } from 'react-router-dom';
import Footer from './footer';
import Header from './header';
import Main from './main';
import { Toaster } from '@/components/ui/sonner';
import { useScrollToUp } from '@/hooks/useScrollToUp';

const PublicLayout = () => {
  useScrollToUp();
  const location = useLocation();
  const showHeader = location.pathname === '/';
  const isPrivacyPolicyPage = location.pathname === '/privacy-policy';
  const isContactPage = location.pathname === '/contact-us';
  const isBlogDetail = /^\/blog_detail\/.+$/.test(location.pathname);

  return (
    <div className={isPrivacyPolicyPage || isBlogDetail ? 'bg-muted section' : ''}>
      {showHeader && <Header />}

      <Main>
        <Outlet />
      </Main>

      {!isContactPage && <Footer />}

      <Toaster position="top-center" />
    </div>
  );
};

export default PublicLayout;
