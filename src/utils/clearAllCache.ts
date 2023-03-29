import { Dispatch } from '@reduxjs/toolkit';

import LocalStorage from '@/utils/LocalStorage';

import authApi from '@/redux/services/auth/auth';

export const ApiServices = [authApi];

const clearAllCache = (dispatch: Dispatch<any>) => {
  LocalStorage.clear();
  ApiServices.forEach((service) => dispatch(service.util.resetApiState()));
};

export default clearAllCache;
