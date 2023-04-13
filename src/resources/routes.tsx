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
  news: {
    path: '/news',
  },
  profile: {
    path: '/profile',
    children: {
      neighbors: {
        path: '/profile/neighbors',
      },
      notes: {
        path: '/profile/notes',
      },
    },
  },
};

export default routes;
