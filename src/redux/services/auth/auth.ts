import { createApi } from '@reduxjs/toolkit/query/react';

import {
  ApiAuthLoginUserBody,
  ApiAuthLoginUserResponse,
  ApiAuthRegisterUserBody,
  ApiAuthRegisterUserResponse,
  ApiUserDeleteGardenPatchBody,
  ApiUserUpdateGardenPatchBody,
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
    updateUserGarden: builder.mutation<ApiUsersMeGetResponse, ApiUserUpdateGardenPatchBody>({
      query: (body) => ({
        body,
        method: 'PATCH',
        url: '/users/garden',
      }),
      invalidatesTags: [serviceTag],
    }),
    deleteUserGarden: builder.mutation<ApiUsersMeGetResponse, ApiUserDeleteGardenPatchBody>({
      query: (body) => ({
        body,
        method: 'PATCH',
        url: '/users/garden/delete',
      }),
      invalidatesTags: [serviceTag],
    }),
  }),
});

export const {
  useGetMeQuery,
  useLazyGetMeQuery,
  useLoginUserMutation,
  useRegisterUserMutation,
  useUpdateUserGardenMutation,
  useDeleteUserGardenMutation,
} = authApi;

export default authApi;
