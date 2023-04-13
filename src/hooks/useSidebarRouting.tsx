import { useMemo } from 'react';

import routes from '@/resources/routes';

import filterBoolean from '@/utils/filterBoolean';

import useAuthorization from '@/hooks/useAuthorization';

const useSidebarRouting = () => {
  const { isAuthorized } = useAuthorization();

  return useMemo(() => {
    const arr = [
      {
        name: 'КАЛЕНДАРЬ ДАЧНИКА',
        href: routes.calendar.path,
      },
      {
        name: 'САД И ОГОРОД',
        href: routes.vegetables.path,
      },
      {
        name: 'ЦВЕТЫ И РАСТЕНИЯ',
        href: routes.herbs.path,
      },
      {
        name: 'НОВОСТИ',
        href: routes.news.path,
      },
      isAuthorized && {
        name: 'МОЙ ОГОРОД',
        href: routes.profile.path,
      },
    ].filter(filterBoolean);

    return arr;
  }, [isAuthorized]);
};

export default useSidebarRouting;
