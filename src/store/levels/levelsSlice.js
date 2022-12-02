import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Service from "../../services/Service";

const initialState = {
  levels: [],
  isError: false,
  isSuccess: false,
  isMessege: "",
  isLoading: false,
};

// Авторизация пользователя
export const getLevels = createAsyncThunk(
  "levels/getLevels",
  async (thunkAPI) => {
    try {
      const response = await Service.getLevels();
      return response.data;
    } catch (error) {
      const message = error.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Стейт пользователя
export const levelsSlice = createSlice({
  name: "levels",
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
      .addCase(getLevels.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getLevels.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.levels = action.payload;
        state.isMessege = "Данные о уровнях пришли!";
      })
      .addCase(getLevels.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isMessege = action.payload;
        state.levels = [];
      });
  },
});

export const { reset } = levelsSlice.actions;
export default levelsSlice.reducer;
