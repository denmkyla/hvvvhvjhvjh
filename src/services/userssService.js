import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersAPI = createApi({
  reducerPath: "usersAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API,
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: "/users",
      }),
      providesTags: (result) => ["User"],
    }),
    createUser: builder.mutation({
      query: (user) => ({
        url: "/users",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
    updateUser: builder.mutation({
      query: (user) => ({
        url: `/users/${user.id}`,
        method: "PUT",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
    deleteUser: builder.mutation({
      query: (user) => ({
        url: `/users/${user.id}`,
        method: "DELETE",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});
