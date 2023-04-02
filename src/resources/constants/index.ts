import routes from '@/resources/routes';

export const DEFAULT_ERROR_MESSAGE = 'Ошибка запроса к серверу';
export const AUTH_TOKEN = 'AUTH_TOKEN';
export const STORAGE_USER_INFO = 'STORAGE_USER_INFO';

export const profileRoutes = [
  {
    label: 'Мои растения',
    path: routes.profile.path,
  },
  {
    label: 'Соседи',
    path: routes.profile.children.neighbors.path,
  },
  {
    label: 'Заметки',
    path: routes.profile.children.notes.path,
  },
];
