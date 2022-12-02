import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Service from "../../services/Service";

//Инициализая начальных данных
const initialState = {
  systems: [],
  isError: false,
  isSuccess: false,
  isMessege: "",
  isLoading: false,
};

//get запрос для получения данных о системах
export const getSystems = createAsyncThunk(
  "systems/getSystems",
  async (thunkAPI) => {
    try {
      const response = await Service.getSystems();
      return response.data;
    } catch (error) {
      const message = error.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Стейт для хранения данных о системах
export const systemsSlice = createSlice({
  name: "systems",
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
      .addCase(getSystems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSystems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.systems = action.payload;
        state.isMessege = "Данные о системах пришли!";
      })
      .addCase(getSystems.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isMessege = action.payload;
        state.systems = [];
      });
  },
});

export const { reset } = systemsSlice.actions;
export default systemsSlice.reducer;
