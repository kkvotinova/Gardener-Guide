import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  ApiAuthLoginUserBody,
  ApiAuthLoginUserResponse,
  ApiAuthRegisterUserBody,
  ApiAuthRegisterUserResponse,
} from '@/redux/services/auth/auth.types';
import { servicesTags } from '@/redux/services';

const serviceTag = servicesTags.auth;

const authApi = createApi({
  tagTypes: [serviceTag],
  reducerPath: `${serviceTag}_API` as const,
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<ApiAuthRegisterUserResponse, ApiAuthRegisterUserBody>({
      query: (body) => ({
        body,
        method: 'POST',
        url: '/auth/register_owner',
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

export const { useLoginUserMutation, useRegisterUserMutation } = authApi;

export default authApi;
