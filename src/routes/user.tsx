import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { RouteObject } from 'react-router-dom';
import LoadingScreen from '@/components/loading/loading-screen';
import ErrorScreen from '@/components/errors/error-boundary';
import Dashboard from '@/pages/dashboard';
import JourneyHistory from '@/pages/history';
import SavedJourney from '@/pages/saved';
import Community from '@/pages/community';
import Settings from '@/pages/settings';
import Support from '@/pages/support';
import ProtectedRoute from '@/components/protected-route/protected-route';
import ProtectedLayout from '@/layout/user';

export const userRoutes: RouteObject[] = [
  {
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <ErrorBoundary FallbackComponent={ErrorScreen}>
          <ProtectedLayout />
        </ErrorBoundary>
      </Suspense>
    ),
    children: [
      {
        path: '/dashboard',
        element: <ProtectedRoute component={Dashboard} />
      },
      {
        path: '/journey-history',
        element: <ProtectedRoute component={JourneyHistory} />
      },
      {
        path: '/saved-journey',
        element: <ProtectedRoute component={SavedJourney} />
      },
      {
        path: '/community',
        element: <ProtectedRoute component={Community} />
      },
      {
        path: '/settings',
        element: <ProtectedRoute component={Settings} />
      },
      {
        path: '/support',
        element: <ProtectedRoute component={Support} />
      }
    ]
  }
];
