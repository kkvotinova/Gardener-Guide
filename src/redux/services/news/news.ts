import { createApi } from '@reduxjs/toolkit/query/react';

import {
  ApiAllNewsGetQuery,
  ApiAllNewsGetResponse,
  ApiNewsByIdPatchBody,
  ApiNewsByIdPatchResponse,
  ApiNewsGetQuery,
  ApiNewsGetResponse,
} from '@/redux/services/news/news.types';
import { servicesTags } from '@/redux/services';
import getBaseQuery from '@/redux/baseQuery';

const serviceTag = servicesTags.news;

const newsApi = createApi({
  tagTypes: [serviceTag],
  reducerPath: `${serviceTag}_API` as const,
  baseQuery: getBaseQuery('/api/news'),
  endpoints: (build) => ({
    getAllNews: build.query<ApiAllNewsGetResponse, ApiAllNewsGetQuery>({
      query: (params) => ({ url: '', params }),
      providesTags: (result) => {
        if (!result) {
          return [{ type: serviceTag, id: 'LIST' }];
        }

        return [
          { type: serviceTag, id: 'LIST' },
          ...result.map(({ _id }) => ({ type: serviceTag, id: _id })),
        ];
      },
    }),
    getNews: build.query<ApiNewsGetResponse, ApiNewsGetQuery>({
      query: ({ _id }) => `/${_id}`,
      providesTags: [serviceTag],
    }),
    addComment: build.mutation<ApiNewsByIdPatchResponse, ApiNewsByIdPatchBody>({
      query: ({ _id, ...body }) => ({ url: `/${_id}`, method: 'PATCH', body }),
      invalidatesTags: [serviceTag],
    }),
  }),
});

export const { useGetAllNewsQuery, useGetNewsQuery, useAddCommentMutation } = newsApi;

export default newsApi;
