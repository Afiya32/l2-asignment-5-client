/* eslint-disable @typescript-eslint/no-explicit-any */
// api.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://assignment-03-five.vercel.app/api' }),  // Your base URL here
  endpoints: (builder) => ({
    signUpUser: builder.mutation<any, any>({
      query: (userData) => ({
        url: 'auth/signup',
        method: 'POST',
        body: userData,
      }),
    }),
    loginUser: builder.mutation<any, any>({
      query: (credentials) => ({
        url: 'auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});


export const { useSignUpUserMutation, useLoginUserMutation } = api;

