import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  userId: "ksemaskema1231",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
    },
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
