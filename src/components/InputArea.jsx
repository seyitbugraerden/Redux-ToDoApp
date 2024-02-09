import React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

function InputArea() {
  return (
    <>
      <h4>Input Area</h4>
      <InputText />
      <Button icon="pi pi-check" />
    </>
  );
}

export default InputArea;
