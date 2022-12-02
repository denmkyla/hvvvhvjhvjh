import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import usersSlice from "./users/usersSlice";
import rolesSlice from "./roles/rolesSlice";
import levelsSlice from "./levels/levelsSlice";
import systemsSlice from "./systems/systemsSlice";

const Store = configureStore({
  reducer: {
    auth: authSlice,
    users: usersSlice,
    roles: rolesSlice,
    levels: levelsSlice,
    systems: systemsSlice,
    devTools: true,
  },
});

export default Store;
