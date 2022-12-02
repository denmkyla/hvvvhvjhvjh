import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import usersService from "../../services/Service";

const initialState = {
  user: [],
  isError: false,
  isSuccess: false,
  isMessege: "",
  isLoading: false,
};

// Авторизация пользователя
export const getUsers = createAsyncThunk("users/getUsers", async (thunkAPI) => {
  try {
    const response = await usersService.getUsers();
    return response.data;
  } catch (error) {
    const message = error.response.data;
    return thunkAPI.rejectWithValue(message);
  }
});

// Авторизация пользователя
export const createUsers = createAsyncThunk(
  "users/createUsers",
  async (data, thunkAPI) => {
    try {
      const response = await usersService.createUsers(data);
      return response.data;
    } catch (error) {
      const message = error.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updateUsers = createAsyncThunk(
  "users/updateUsers",
  async (data, thunkAPI) => {
    try {
      const response = await usersService.updateUsers(data);
      return response.data;
    } catch (error) {
      const message = error.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteUsers = createAsyncThunk(
  "users/deleteUsers",
  async (id, thunkAPI) => {
    try {
      const response = await usersService.deleteUsers(id);
      return id;
    } catch (error) {
      const message = error.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

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
        state.isMessege = "Данные о пользователях пришли!";
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isMessege = action.payload;
        state.user = [];
      })
      .addCase(createUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user.push(action.payload.user);
        state.isMessege = "Пользователь успешно создан!";
      })
      .addCase(createUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isMessege = action.payload;
      })
      .addCase(deleteUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        let index = state.user.findIndex(({ id }) => id === action.payload);
        state.user.splice(index, 1);
        state.isMessege = "Пользователь успешно удален!";
      })
      .addCase(deleteUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isMessege = action.payload;
      })
      .addCase(updateUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        let index = state.user.findIndex(({ id }) => id === action.payload.id);
        state.user[index] = { ...state.user[index], ...action.payload };
        state.isMessege = "Пользователь успешно обновлен!";
      })
      .addCase(updateUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isMessege = action.payload;
      });
  },
});

export const { reset } = usersSlice.actions;
export default usersSlice.reducer;
