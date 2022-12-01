import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const systemsAPI = createApi({
  reducerPath: "systemsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API,
  }),
  endpoints: (builder) => ({
    getSystem: builder.query({
      query: () => ({
        url: "/systems",
      }),
    }),
  }),
});
