import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { RouteObject } from 'react-router-dom';
import LoadingScreen from '@/components/loading/loading-screen';
import ErrorScreen from '@/components/errors/error-boundary';
import AuthLayout from '@/layout/auth';
import SignUp from '@/pages/auth/signup';
import LogIn from '@/pages/auth/login';
import ForgotPassword from '@/pages/auth/forgot_password';

export const authRoutes: RouteObject[] = [
  {
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <ErrorBoundary FallbackComponent={ErrorScreen}>
          <AuthLayout />
        </ErrorBoundary>
      </Suspense>
    ),
    children: [
      {
        path: '/login',
        element: <LogIn />
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '/forgot-password',
        element: <ForgotPassword />
      }
    ]
  }
];
