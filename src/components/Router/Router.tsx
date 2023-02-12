import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import PlantsPage from '@/pages/PlantsPage';
import PlantPage from '@/pages/PlantPage';
import MainPage from '@/pages/MainPage';
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
        element: <PlantsPage />,
      },
      {
        path: routes.vegetables.detailPath(':id'),
        element: <PlantPage />,
      },
      {
        path: routes.herbs.path,
        element: <PlantsPage isHerbPage />,
      },
      {
        path: routes.herbs.detailPath(':id'),
        element: <PlantPage isHerbPage />,
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
