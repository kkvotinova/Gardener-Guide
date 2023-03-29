import { configureStore } from '@reduxjs/toolkit';

import { ApiServices } from '@/utils/clearAllCache';

import plantsApi from '@/redux/services/plants/plants';
import authApi from '@/redux/services/auth/auth';
import apiErrorHandler from '@/redux/apiErrorHandler';

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [plantsApi.reducerPath]: plantsApi.reducer,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware().concat([
      apiErrorHandler,
      ...[...ApiServices, plantsApi].map((a) => a.middleware),
    ]),
});

export default store;
