// TaskSlice.jsx
import { createSlice } from "@reduxjs/toolkit";
import examples from "../data/data.json";
import { nanoid } from "nanoid";

const initialState = {
  data: examples,
  value: "",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.data.push({
        name: state.value,
        id: nanoid(),
      });
      state.value = "";
    },
    changeValue: (state, action) => {
      state.value = action.payload;
    },
    deleteTask: (state, action) => {
      const taskId = action.payload;
      state.data = state.data.filter((task) => task.id !== taskId);
    },
  },
});

export const { addTask, changeValue, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
