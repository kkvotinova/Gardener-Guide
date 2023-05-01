import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ProfilePage from '@/pages/ProfilePage';
import ProfileNotesPage from '@/pages/ProfileNotesPage';
import ProfileNeighborsPage from '@/pages/ProfileNeighborsPage';
import ProfileGardenPage from '@/pages/ProfileGardenPage';
import PlantsPage from '@/pages/PlantsPage';
import PlantPage from '@/pages/PlantPage';
import NewsPage from '@/pages/NewsPage';
import NewsDetailedPage from '@/pages/NewsDetailedPage';
import MainPage from '@/pages/MainPage';
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
        path: routes.news.path,
        element: <NewsPage />,
      },
      {
        path: routes.news.detailPath(':id'),
        element: <NewsDetailedPage />,
      },
      {
        path: routes.profile.path,
        element: <ProfilePage />,
        children: [
          {
            path: routes.profile.path,
            element: <ProfileGardenPage />,
          },
          {
            path: routes.profile.children.neighbors.path,
            element: <ProfileNeighborsPage />,
          },
          {
            path: routes.profile.children.notes.path,
            element: <ProfileNotesPage />,
          },
        ],
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
