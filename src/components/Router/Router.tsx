import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import VegetablesPage from '@/pages/VegetablesPage';
import VegetablePage from '@/pages/VegetablePage';
import MainPage from '@/pages/MainPage';
import FlowersPage from '@/pages/FlowersPage';
import DesignPage from '@/pages/DesignPage';
import CalendarPage from '@/pages/CalendarPage';

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
        element: <CalendarPage />,
      },
      {
        path: routes.vegetables.path,
        element: <VegetablesPage />,
      },
      {
        path: routes.vegetables.detailPath(':id'),
        element: <VegetablePage />,
      },
      {
        path: routes.flowers.path,
        element: <FlowersPage />,
      },
      {
        path: routes.flowers.detailPath(':id'),
        element: <div>detail flower page</div>,
      },
      {
        path: routes.design.path,
        element: <DesignPage />,
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
