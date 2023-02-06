import { Dispatch } from '@reduxjs/toolkit';

import authApi from '@/redux/services/auth/auth';

export const ApiServices = [authApi];

const clearAllCache = (dispatch: Dispatch<any>) => {
  localStorage.clear();
  ApiServices.forEach((service) => dispatch(service.util.resetApiState()));
};

export default clearAllCache;
