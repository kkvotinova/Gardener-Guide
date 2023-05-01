import { configureStore } from '@reduxjs/toolkit';

import { ApiServices } from '@/utils/clearAllCache';

import plantsApi from '@/redux/services/plants/plants';
import notesApi from '@/redux/services/notes/notes';
import news from '@/redux/services/news/news';
import authApi from '@/redux/services/auth/auth';
import apiErrorHandler from '@/redux/apiErrorHandler';

const store = configureStore({
  reducer: {
    [news.reducerPath]: news.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [notesApi.reducerPath]: notesApi.reducer,
    [plantsApi.reducerPath]: plantsApi.reducer,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware().concat([
      apiErrorHandler,
      ...[...ApiServices, plantsApi, news].map((a) => a.middleware),
    ]),
});

export default store;
