import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Service from "../../services/Service";

const initialState = {
  roles: [],
  isError: false,
  isSuccess: false,
  isMessege: "",
  isLoading: false,
};

// Авторизация пользователя
export const getRoles = createAsyncThunk("roles/getRoles", async (thunkAPI) => {
  try {
    const response = await Service.getRoles();
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
        state.isMessege = "Данные о ролей пришли!";
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
