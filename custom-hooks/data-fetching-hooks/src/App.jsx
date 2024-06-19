import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";

// Data fetching hook
function useTodos(n) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log("Starting interval");
    const interval = setInterval(() => {
      axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
        setTodos(res.data.todos);
      });
      setLoading(false);
    }, n * 1000);
    return () => {
      console.log("Closing interval");
      clearInterval(interval);
    };
  }, [n]);
  return { todos, loading };
}

// Browser functionality hooks:-
const useOnline = () => {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);
  useEffect(() => {
    window.addEventListener("online", () => {
      setIsOnline(true);
    });
    window.addEventListener("offline", () => {
      setIsOnline(false);
    });
  }, []);
  return isOnline;
};

const useMousePointer = () => {
  const [pointerCords, setPointerCords] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    setPointerCords({
      x: e.clientX,
      y: e.clientY,
    });
  };
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

  return pointerCords;
};

const useDimensions = () => {
  const [dimensions, setDimensions] = useState({
    w: window.innerWidth,
    h: window.innerHeight,
  });

  const handleUpdateDimensions = () => {
    setDimensions({
      w: window.innerWidth,
      h: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleUpdateDimensions);
    return () => {
      window.addEventListener("resize", handleUpdateDimensions);
    };
  }, []);

  return dimensions;
};

// Performance/ timer based
const useInterval = (fn, time) => {
  useEffect(() => {
    const interval = setInterval(fn, time * 1000);
    return () => {
      clearInterval(interval);
    };
  }, [fn]);
};

const useDebounce = (value, time) => {
  const [debouncedValue, setDebouncedValue] = useState(value)
  useEffect(() => {
    let timeout;
    timeout = setTimeout(() => {
      setDebouncedValue(value)
    }, time);

    return () => {
      clearTimeout(timeout);
    };
  }, [value, time]);
  return debouncedValue
};
const App = () => {
  const [input, setInput] = useState("");
  const val = useDebounce(input, 500);

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <div>{val}</div>
    </>
  );
};

function Track({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
export default App;
