import { Dispatch } from '@reduxjs/toolkit';

import plantsApi from '@/redux/services/plants/plants';
import authApi from '@/redux/services/auth/auth';

export const ApiServices = [authApi, plantsApi];

const clearAllCache = (dispatch: Dispatch<any>) => {
  localStorage.clear();
  ApiServices.forEach((service) => dispatch(service.util.resetApiState()));
};

export default clearAllCache;
