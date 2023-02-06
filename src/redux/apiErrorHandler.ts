import { Middleware, isRejectedWithValue } from '@reduxjs/toolkit';

import { DEFAULT_ERROR_MESSAGE } from '@/resources/constants';

import { AlerterTypes } from '@/utils/Alerter/AlerterTypes';
import Alerter from '@/utils/Alerter/Alerter';

type ApiErrorHandler = Middleware;

const apiErrorHandler: ApiErrorHandler = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    const responseMessage = action.payload.data.message;

    switch (action.payload.status) {
      default:
        Alerter.show(responseMessage || DEFAULT_ERROR_MESSAGE, AlerterTypes.error);
        break;
    }
  }

  return next(action);
};

export default apiErrorHandler;
