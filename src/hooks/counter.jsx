import React, { useState } from "react";
import useDocument from "./useDocuments";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useDocument(`${name} has clicked ${count}`);

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <h2>
        {name} has Clicked:{count}
      </h2>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
};

export default Counter;
