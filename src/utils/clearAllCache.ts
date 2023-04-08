import { Dispatch } from '@reduxjs/toolkit';

import LocalStorage from '@/utils/LocalStorage';

import notesApi from '@/redux/services/notes/notes';
import authApi from '@/redux/services/auth/auth';

export const ApiServices = [authApi, notesApi];

const clearAllCache = (dispatch: Dispatch<any>) => {
  LocalStorage.clear();
  ApiServices.forEach((service) => dispatch(service.util.resetApiState()));
};

export default clearAllCache;
