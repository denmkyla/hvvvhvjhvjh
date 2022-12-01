import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rolesAPI = createApi({
  reducerPath: "rolesAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API,
  }),
  endpoints: (builder) => ({
    getRole: builder.query({
      query: () => ({
        url: "/roles",
      }),
    }),
  }),
});
