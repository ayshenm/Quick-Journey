import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { RouteObject } from 'react-router-dom';
import LoadingScreen from '@/components/loading/loading-screen';
import ErrorScreen from '@/components/errors/error-boundary';
import PublicLayout from '@/layout/root';
import Blog from '@/pages/guest/blog';
import PrivacePolice from '@/pages/guest/privacy-policy';
import ContactUs from '@/pages/guest/contact-us';
import Root from "@/pages/guest/index"
import BlogDetail from '@/pages/guest/blog/blog_details';

export const publicRoutes: RouteObject[] = [
  {
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <ErrorBoundary FallbackComponent={ErrorScreen}>
          <PublicLayout />
        </ErrorBoundary>
      </Suspense>
    ),
    children: [
      {
        path: '/',
        element: <Root />
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/blog_detail/:id',
        element: <BlogDetail />
      },
      {
        path: '/privacy-policy',
        element: <PrivacePolice />
      },
      {
        path: '/contact-us',
        element: <ContactUs />
      }
    ]
  }
];
