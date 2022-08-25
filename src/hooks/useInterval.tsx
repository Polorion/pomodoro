import { useEffect, useRef, useState } from "react";

function useInterval(callback, time, action, condition) {
  const [inter, setInter] = useState(0);
  const ref = useRef(callback);

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  const tick = () => {
    ref.current();
  };

  const start = () => {
    if (condition.time > 0) {
      action && action(true);
      // @ts-ignore
      setInter(setInterval(tick, time));
    }
  };
  const stop = () => {
    action && action(false);
    clearInterval(inter);
  };
  return [start, stop];
}

export default useInterval;
