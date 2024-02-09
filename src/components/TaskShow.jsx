import React from "react";
import { Panel } from "primereact/panel";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "./Slice/TaskSlice";

function TaskShow() {
  const { data } = useSelector((store) => store.task);
  const dispatch = useDispatch();
  return (
    <>
      <Panel header="Tasks">
        {data.map((item, index) => (
          <div key={index} className="task">
            <p>{item.name}</p>
            <button
              onClick={() => {
                dispatch(deleteTask(item.id));
              }}
            >
              Tamamlandı
            </button>
          </div>
        ))}
      </Panel>
    </>
  );
}

export default TaskShow;
