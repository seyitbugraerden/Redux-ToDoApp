import React from "react";
import { Panel } from "primereact/panel";
import { useSelector } from "react-redux";

function TaskShow() {
  const { data } = useSelector((store) => store.task);
  return (
    <>
      <Panel header="Tasks">
        {data.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </Panel>
    </>
  );
}

export default TaskShow;
