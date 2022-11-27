import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import rolesService from "../../services/rolesService";

const initialState = {
  roles: [],
  isError: true,
  isSuccess: false,
  isMessege: "",
  isLoading: false,
};

// Авторизация пользователя
export const getRoles = createAsyncThunk("roles/getRoles", async (thunkAPI) => {
  try {
    const response = await rolesService.getRoles();
    console.log(response.data);
    return response.data;
  } catch (error) {
    const message = error.response.data;
    return thunkAPI.rejectWithValue(message);
  }
});

//Стейт пользователя
export const rolesSlice = createSlice({
  name: "roles",
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
      .addCase(getRoles.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRoles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.roles = action.payload;
        console.log(action.payload);
        state.isMessege = "Данные пришли!";
      })
      .addCase(getRoles.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isMessege = action.payload;
        state.roles = [];
      });
  },
});

export const { reset } = rolesSlice.actions;
export default rolesSlice.reducer;
