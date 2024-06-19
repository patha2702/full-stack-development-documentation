import { useEffect, useState } from "react";
import ClassComponent from "./ClassComponent";
import { FunctionComponent } from "./FunctionComponent";
import LifeCycleEventClass from "./LifeCycleEventClass";
import LifeCycleEventFunctional from "./LifeCycleEventFunctional";

const App = () => {
  const [component, setComponent] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setComponent((r) => !r);
    }, 4000);
    return clearInterval(interval);
  });
  return <div>{component && <LifeCycleEventFunctional />}</div>;
};

export default App;
