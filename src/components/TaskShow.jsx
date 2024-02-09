import React, { useState } from "react";
import { Panel } from "primereact/panel";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "./Slice/TaskSlice";

function TaskShow() {
  const { data } = useSelector((store) => store.task);
  const dispatch = useDispatch();

  const handleTaskDelete = (taskId) => {
    const taskElement = document.getElementById(taskId);
    if (taskElement) {
      taskElement.classList.add("fade-out");
      setTimeout(() => {
        dispatch(deleteTask(taskId));
      }, 500);
    }
  };

  return (
    <>
      <Panel header="Tasks">
        {data.map((item, index) => (
          <div key={index} className="task" id={item.id}>
            <p>{item.name}</p>
            <button onClick={() => handleTaskDelete(item.id)}>
              Tamamlandı
            </button>
          </div>
        ))}
      </Panel>
    </>
  );
}

export default TaskShow;
