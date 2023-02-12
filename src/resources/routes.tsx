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
  herbs: {
    path: '/herbs',
    detailPath: (id: string | number) => `/herbs/${id}`,
  },
  design: {
    path: '/design',
  },
  profile: {
    path: '/profile',
  },
};

export default routes;
