import React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { addTask, changeValue } from "./Slice/TaskSlice";
import { useDispatch, useSelector } from "react-redux";

function InputArea() {
  const value = useSelector((state) => state.task.value);
  const dispatch = useDispatch();

  return (
    <>
      <h4>Input Area</h4>
      <InputText
        value={value}
        onChange={(e) => {
          dispatch(changeValue(e.target.value));
        }}
        placeholder="Add Task"
      />
      <Button
        icon="pi pi-check"
        onClick={() => {
          dispatch(addTask());
        }}
      />
    </>
  );
}

export default InputArea;
