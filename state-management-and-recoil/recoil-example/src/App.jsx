import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom } from "./store/atoms/count";
import { useMemo } from "react";
import { evenSelector } from "./store/selectors/even";

function App() {
  return (
    <RecoilRoot>
      <Count />;
      <EvenOrOdd />
    </RecoilRoot>
  );
}

function Count() {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      <h1>{count}</h1>
      <Buttons />
    </div>
  );
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  console.log("Buttons re redner")
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

function EvenOrOdd() {
  const isEven = useRecoilValue(evenSelector)

  return (
    isEven && <p>It is even</p>
  )
}

export default App;
