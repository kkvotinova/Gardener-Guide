import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  ApiAllPlantsGetQuery,
  ApiAllPlantsGetResponse,
  ApiPlantsGetQuery,
  ApiPlantsGetResponse,
} from '@/redux/services/plants/plants.type';
import { servicesTags } from '@/redux/services';

const serviceTag = servicesTags.plants;

const plantsApi = createApi({
  tagTypes: [serviceTag],
  reducerPath: `${serviceTag}_API` as const,
  baseQuery: fetchBaseQuery({ baseUrl: '/api/plants' }),
  endpoints: (build) => ({
    getAllPlants: build.query<ApiAllPlantsGetResponse, ApiAllPlantsGetQuery>({
      query: (type) => ({ url: `/${type}` }),
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
    getPlant: build.query<ApiPlantsGetResponse, ApiPlantsGetQuery>({
      query: ({ _id, type }) => `/${type}/${_id}`,
      providesTags: [serviceTag],
    }),
  }),
});

export const { useGetAllPlantsQuery, useGetPlantQuery } = plantsApi;

export default plantsApi;
