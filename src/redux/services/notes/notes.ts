import { createApi } from '@reduxjs/toolkit/query/react';
import { EntityId } from '@reduxjs/toolkit';

import {
  ApiGetNotesGetQuery,
  ApiGetNotesGetResponse,
  ApiNoteByIdPatchBody,
  ApiNoteByIdPatchResponse,
  ApiNotePostBody,
  ApiNotePostResponse,
} from '@/redux/services/notes/notes.types';
import { servicesTags } from '@/redux/services';
import getBaseQuery from '@/redux/baseQuery';

const serviceTag = servicesTags.notes;

const notesApi = createApi({
  tagTypes: [serviceTag],
  reducerPath: `${serviceTag}_API` as const,
  baseQuery: getBaseQuery('/api/notes'),
  endpoints: (build) => ({
    getNotes: build.query<ApiGetNotesGetResponse, ApiGetNotesGetQuery>({
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
    createNote: build.mutation<ApiNotePostResponse, ApiNotePostBody>({
      query: (body) => ({ url: '', method: 'POST', body }),
      invalidatesTags: [serviceTag],
    }),
    updateNoteById: build.mutation<ApiNoteByIdPatchResponse, ApiNoteByIdPatchBody>({
      query: ({ id, ...body }) => ({ url: `/${id}`, method: 'PATCH', body }),
      invalidatesTags: [serviceTag],
    }),
    deleteNoteById: build.mutation<void, EntityId>({
      query: (id) => ({ url: `/${id}`, method: 'DELETE' }),
      invalidatesTags: (result, error, arg) => {
        if (error) {
          return [];
        }

        return [{ type: serviceTag, id: arg }];
      },
    }),
  }),
});

export const {
  useGetNotesQuery,
  useCreateNoteMutation,
  useUpdateNoteByIdMutation,
  useDeleteNoteByIdMutation,
} = notesApi;

export default notesApi;
