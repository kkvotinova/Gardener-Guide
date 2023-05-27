import { useMemo } from 'react';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import GrassIcon from '@mui/icons-material/Grass';
import FenceIcon from '@mui/icons-material/Fence';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

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
        icon: <CalendarMonthIcon />,
      },
      {
        name: 'САД И ОГОРОД',
        href: routes.vegetables.path,
        icon: <GrassIcon />,
      },
      {
        name: 'ЦВЕТЫ И РАСТЕНИЯ',
        href: routes.herbs.path,
        icon: <LocalFloristIcon />,
      },
      {
        name: 'НОВОСТИ',
        href: routes.news.path,
        icon: <NewspaperIcon />,
      },
      isAuthorized && {
        name: 'МОЙ ОГОРОД',
        href: routes.profile.path,
        icon: <FenceIcon />,
      },
    ].filter(filterBoolean);

    return arr;
  }, [isAuthorized]);
};

export default useSidebarRouting;
