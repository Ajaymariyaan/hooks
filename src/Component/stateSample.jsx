import React, { useState } from "react";

function StateSample() {
  const [name, setName] = useState("");

  const handler = () => {
    setName("Ajai");
  };

  return (
    <>
      <p>Hello! {name}</p>
      <button onClick={handler}>Click Me</button>
    </>
  );
}

export default StateSample;
