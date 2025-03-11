import { BASE_URL } from '@/configs/constants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: 'omit',
  }),
  tagTypes: [''],
  endpoints: () => ({}),
});
