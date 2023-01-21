import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorBoundary from '@/components/ErrorBoundary';

import routes from '@/resources/routes';

const router = createBrowserRouter([
  {
    path: routes.index.path,
    element: routes.index.component,
    errorElement: <ErrorBoundary />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
