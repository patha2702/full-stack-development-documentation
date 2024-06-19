import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const [income, setIncome] = useState(500);

  const divRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      divRef.current.innerHTML = "10000";
    }, 5000);
  }, []);
  return (
    <div>
      Income
      <span ref={divRef}>{income}</span>
    </div>
  );
};

export default App;
