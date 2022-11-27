import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import usersService from "../../services/usersService";

const initialState = {
  user: [],
  isError: true,
  isSuccess: false,
  isMessege: "",
  isLoading: false,
};

// Авторизация пользователя
export const getUsers = createAsyncThunk("users/getUsers", async (thunkAPI) => {
  try {
    const response = await usersService.getUsers();
    console.log(response.data);
    return response.data;
  } catch (error) {
    const message = error.response.data;
    return thunkAPI.rejectWithValue(message);
  }
});

//Стейт пользователя
export const usersSlice = createSlice({
  name: "users",
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
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        console.log(action.payload);
        state.isMessege = "Данные пришли!";
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isMessege = action.payload;
        state.user = [];
      });
  },
});

export const { reset } = usersSlice.actions;
export default usersSlice.reducer;
