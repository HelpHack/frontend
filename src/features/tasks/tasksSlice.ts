import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import taskService from "./tasksService";

const initialState = {
  userId: "ksemaskema1231",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  startLocation: {
    lat: "50.257379",
    lng: "19.022999",
  },
  endLocation: {
    lat: "50.264211",
    lng: "19.023304",
  },
  response: {},
};

interface DirectionProps {
  startLat: string;
  startLng: string;
  endLat: string;
  endLng: string;
  numberOfProducts: string;
}

export const getDirection = createAsyncThunk(
  "tasks/directions",
  async (
    { startLat, startLng, endLat, endLng, numberOfProducts }: DirectionProps,
    thunkAPI
  ) => {
    try {
      return await taskService.getDirection({
        startLat,
        startLng,
        endLat,
        endLng,
        numberOfProducts,
      });
    } catch (error) {
      const message = error.response.data || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const addTask = createAsyncThunk(
    "tasks/addTasks",
    async (
        list: {value: string}[],
        thunkAPI
    ) => {
      try {
        const res =  await taskService.addTask(list);
        console.log({res})
        return res
      } catch (error) {
        console.log({error})
        const message = error.response.data || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
);

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
    },
    extraReducers: (builder: any) => {
      builder
        .addCase(getDirection.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getDirection.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isRegistration = true;
          state.response = action.payload;
        })
        .addCase(getDirection.rejected, (state, action) => {
          state.isLoading = false;
          state.message = action.payload;
          state.isError = true;
        });
    },
  },
});

export const { reset } = taskSlice.actions;
export default taskSlice.reducer;
