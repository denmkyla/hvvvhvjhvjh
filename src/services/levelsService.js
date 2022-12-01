import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const levelsAPI = createApi({
  reducerPath: "levelsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API,
  }),
  endpoints: (builder) => ({
    getLevel: builder.query({
      query: () => ({
        url: "/levels",
      }),
    }),
  }),
});
