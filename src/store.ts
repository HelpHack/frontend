import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import authSlice from "src/features/auth/authSlice";
import taskSlice from "src/features/tasks/tasksSlice";

export const store = configureStore({
  reducer: {
    authSlice,
    taskSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
