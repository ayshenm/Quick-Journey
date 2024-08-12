import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import ContextProvider from './contexts';

const router = createBrowserRouter(routes);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </QueryClientProvider>
);
