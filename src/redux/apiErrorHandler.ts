import { Middleware, isRejectedWithValue } from '@reduxjs/toolkit';

import { DEFAULT_ERROR_MESSAGE } from '@/resources/constants';

import clearAllCache from '@/utils/clearAllCache';
import { AlerterTypes } from '@/utils/Alerter/AlerterTypes';
import Alerter from '@/utils/Alerter/Alerter';

import { servicesTags } from '@/redux/services';
import store from '@/redux';

type ApiErrorHandler = Middleware;

const apiErrorHandler: ApiErrorHandler = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    const responseMessage = action.payload.data.message;

    switch (action.payload.status) {
      case 401:
        clearAllCache(store.dispatch);

        if (!action.type.includes(servicesTags.auth)) {
          Alerter.show('Требуется повторная авторизация', AlerterTypes.error);
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
