import { createContext, useContext, useState } from "react";

const counterContext = createContext({})
function App() {
  const [count, setCount] = useState(0);

  return (

    <counterContext.Provider value={{
      count: count,
      setCount: setCount
    }}>
      <Count />
    </counterContext.Provider>
      
    
  );
}

function Count() {
  const {count} = useContext(counterContext)
  return (
    <div>
      <h1>{count}</h1>
      <Buttons />
    </div>
  );
}

function Buttons() {
  const { setCount } = useContext(counterContext)
  return (
    <div>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount((prev) => prev - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}
export default App;
