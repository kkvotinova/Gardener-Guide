import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainPage from '@/pages/MainPage';

import ErrorBoundary from '@/components/ErrorBoundary';
import ContentWrapper from '@/components/ContentWrapper';

import routes from '@/resources/routes';

const router = createBrowserRouter([
  {
    path: routes.index.path,
    element: <ContentWrapper />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: routes.index.path,
        element: <MainPage />,
      },
      {
        path: routes.calendar.path,
        element: <div>Calendar</div>,
      },
      {
        path: routes.vegetables.path,
        element: <div>vegetables</div>,
      },
      {
        path: routes.flowers.path,
        element: <div>flowers</div>,
      },
      {
        path: routes.design.path,
        element: <div>design</div>,
      },
      {
        path: routes.profile.path,
        element: <div>profile</div>,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
