import { createApi } from '@reduxjs/toolkit/query/react';

import {
  ApiAuthLoginUserBody,
  ApiAuthLoginUserResponse,
  ApiAuthRegisterUserBody,
  ApiAuthRegisterUserResponse,
  ApiUsersMeGetResponse,
} from '@/redux/services/auth/auth.types';
import { servicesTags } from '@/redux/services';
import getBaseQuery from '@/redux/baseQuery';

const serviceTag = servicesTags.auth;

const authApi = createApi({
  tagTypes: [serviceTag],
  reducerPath: `${serviceTag}_API` as const,
  baseQuery: getBaseQuery('/api'),
  endpoints: (builder) => ({
    getMe: builder.query<ApiUsersMeGetResponse, void>({
      query: () => '/users/me',
      providesTags: [serviceTag],
    }),
    registerUser: builder.mutation<ApiAuthRegisterUserResponse, ApiAuthRegisterUserBody>({
      query: (body) => ({
        body,
        method: 'POST',
        url: '/auth/register',
      }),
      invalidatesTags: [serviceTag],
    }),
    loginUser: builder.mutation<ApiAuthLoginUserResponse, ApiAuthLoginUserBody>({
      query: (body) => ({
        body,
        method: 'POST',
        url: '/auth/login',
      }),
      invalidatesTags: [serviceTag],
    }),
  }),
});

export const { useGetMeQuery, useLazyGetMeQuery, useLoginUserMutation, useRegisterUserMutation } =
  authApi;

export default authApi;
