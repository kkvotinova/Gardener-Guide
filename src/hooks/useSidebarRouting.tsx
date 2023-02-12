import { useMemo } from 'react';

import routes from '@/resources/routes';

import filterBoolean from '@/utils/filterBoolean';

const useSidebarRouting = () => {
  const isAuthorized = false;

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
        name: 'ДАЧНЫЙ ДИЗАЙН',
        href: routes.design.path,
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
