import { configureStore } from "@reduxjs/toolkit";
import TaskReducer from "../components/Slice/TaskSlice";

export const store = configureStore({
  reducer: {
    task: TaskReducer,
  },
});
