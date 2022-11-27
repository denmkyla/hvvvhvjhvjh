import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../services/authService";
const localUser = JSON.parse(localStorage.getItem("user"));
const initialState = {
  user: localUser ? localUser : null,
  isError: true,
  isSuccess: false,
  isMessege: "",
  isLoading: false,
};

// Авторизация пользователя
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    const response = await authService.login(user);
    localStorage.setItem("accessToken", response.data.accessToken);
    localStorage.setItem("user", JSON.stringify(response.data.user));

    return response.data.user;
  } catch (error) {
    const message = error.response.data;
    return thunkAPI.rejectWithValue(message);
  }
});

// Выход пользователя
export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.Logout();
});

// Выход пользователя
export const setSession = createAsyncThunk(
  "auth/setSession",
  async (accessToken, thunkAPI) => {
    try {
      return await authService.setSession(accessToken);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//Стейт пользователя
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.isMessege = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.isMessege = "Вы авторизованы!";
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isMessege = action.payload;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = false;
        state.isMessege = "";
      })
      .addCase(setSession.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(setSession.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.isMessege = "Вы авторизованы!";
      })
      .addCase(setSession.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isMessege = action.payload;
        state.user = null;
      });
  },
});

export const { reset, remember, noRemember } = authSlice.actions;
export default authSlice.reducer;
