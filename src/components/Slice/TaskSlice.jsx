// TaskSlice.jsx
import { createSlice } from "@reduxjs/toolkit";
import examples from "../data/data.json";

const initialState = {
  data: examples,
  value: "Add Task",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.data.push(state.value);
    },
    changeValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addTask, changeValue } = taskSlice.actions;
export default taskSlice.reducer;
