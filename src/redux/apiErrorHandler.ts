import { Middleware, isRejectedWithValue } from '@reduxjs/toolkit';

import { DEFAULT_ERROR_MESSAGE } from '@/resources/constants';

import clearAllCache from '@/utils/clearAllCache';
import { AlerterTypes } from '@/utils/Alerter/AlerterTypes';
import Alerter from '@/utils/Alerter/Alerter';

import store from '@/redux';

type ApiErrorHandler = Middleware;

const apiErrorHandler: ApiErrorHandler = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    const responseMessage = action.payload.data.message;

    switch (action.payload.status) {
      case 401:
        if (store.getState().AUTH_API?.queries?.['getMe(undefined)']?.status === 'fulfilled') {
          clearAllCache(store.dispatch);
        }
        break;

      default:
        Alerter.show(responseMessage || DEFAULT_ERROR_MESSAGE, AlerterTypes.error);
        break;
    }
  }

  return next(action);
};

export default apiErrorHandler;
