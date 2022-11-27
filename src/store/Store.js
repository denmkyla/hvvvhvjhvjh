import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import rolesSlice from "./roles/rolesSlice";
import usersSlice from "./users/usersSlice";
const Store = configureStore({
  reducer: {
    auth: authSlice,
    users: usersSlice,
    roles: rolesSlice,
  },
});

export default Store;
