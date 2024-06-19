import React, { useState } from "react";

export const FunctionComponent = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <span>{count}</span>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};
