const routes = {
  index: {
    path: '/',
  },
  calendar: {
    path: '/calendar',
  },
  vegetables: {
    path: '/vegetables',
    detailPath: (id: string | number) => `/vegetables/${id}`,
  },
  flowers: {
    path: '/flowers',
    detailPath: (id: string | number) => `/flowers/${id}`,
  },
  design: {
    path: '/design',
  },
  profile: {
    path: '/profile',
  },
};

export default routes;
