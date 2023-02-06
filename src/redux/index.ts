import { configureStore } from '@reduxjs/toolkit';

import { ApiServices } from '@/utils/clearAllCache';

import authApi from '@/redux/services/auth/auth';
import apiErrorHandler from '@/redux/apiErrorHandler';

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware().concat([apiErrorHandler, ...ApiServices.map((a) => a.middleware)]),
});

export default store;
