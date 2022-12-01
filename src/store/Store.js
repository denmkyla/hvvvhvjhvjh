import { configureStore } from "@reduxjs/toolkit";
import { rolesAPI } from "../services/rolesService";
import authSlice from "./auth/authSlice";
import usersSlice from "./users/usersSlice";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { levelsAPI } from "../services/levelsService";
import { systemsAPI } from "../services/systemsService";
import { usersAPI } from "../services/userssService";
const Store = configureStore({
  reducer: {
    auth: authSlice,
    users: usersSlice,
    [rolesAPI.reducerPath]: rolesAPI.reducer,
    [levelsAPI.reducerPath]: levelsAPI.reducer,
    [systemsAPI.reducerPath]: systemsAPI.reducer,
    [usersAPI.reducerPath]: usersAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      rolesAPI.middleware,
      levelsAPI.middleware,
      systemsAPI.middleware,
      usersAPI.middleware
    ),
});

export default Store;
setupListeners(Store.dispatch);
