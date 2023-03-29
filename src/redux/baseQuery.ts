import { fetchBaseQuery } from '@reduxjs/toolkit/query';

import { AUTH_TOKEN } from '@/resources/constants';

import LocalStorage from '@/utils/LocalStorage';

// @ts-ignore
const getBaseQuery = (baseUrl: string) =>
  fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      const token = LocalStorage.get(AUTH_TOKEN);

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  });

export default getBaseQuery;
